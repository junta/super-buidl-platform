import { useState } from "react";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { useSigner } from "wagmi";
import { Spinner } from "~~/components/Spinner";
import { Address, AddressInput, Balance, BlockieAvatar } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import scaffoldConfig from "~~/scaffold.config";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

export const NUMBER_REGEX = /^\.?\d+\.?\d*$/;
export const GET_STREAMS = gql`
  query MyQuery($currentFlowRate_gt: BigInt = "0") {
    streams(where: { sender: "0x26439c143fff24b4c9114ef77f568b596613078f", currentFlowRate_gt: $currentFlowRate_gt }) {
      currentFlowRate
      token {
        symbol
      }
      receiver {
        id
      }
      sender {
        id
      }
    }
  }
`;

const SuperFluid: NextPage = () => {
  const [tokenValue, setTokenValue] = useState("");
  const targetNetwork = getTargetNetwork();
  const { data: signer } = useSigner();
  const { data: deployedContract } = useDeployedContractInfo("SuperBuidl");
  const [approvalLoading, setApprovalLoading] = useState(false);
  const [address, setAddress] = useState("0xD8fEBA98bc4418290568a9111821dE2dc84E9F3E");
  const [deleteAddress, setDeleteAddress] = useState("");
  const [flowRatePerMonth, setFlowRatePerMonth] = useState("");
  const [flowRatePerSec, setFlowRatePerSec] = useState(0);
  const { loading: loadingAllStreams, error: streamsError, data: allStreamsData } = useQuery(GET_STREAMS);
  console.log("⚡️ ~ file: superfluid.tsx:42 ~ data:", allStreamsData);
  // const { data: superBuidl } = useScaffoldContract({
  //   contractName: "SuperBuidl",
  //   signerOrProvider: signer,
  // });
  // sendLumpSum
  const { writeAsync: sendLumpSumToContract, isLoading: lumpSumpLoading } = useScaffoldContractWrite({
    contractName: "SuperBuidl",
    functionName: "sendLumpSumToContract",
    args: [
      // scaffoldConfig.mumbaiDaixAddress,
      scaffoldConfig.goerliDaixAddress,
      NUMBER_REGEX.test(tokenValue) ? ethers.utils.parseEther(tokenValue) : undefined,
    ],
  });
  // ------------------

  // Create cash flow
  const { writeAsync: createCashFlowFromContract, isLoading: isCreateFlowLoading } = useScaffoldContractWrite({
    contractName: "SuperBuidl",
    functionName: "createFlowFromContract",
    // @ts-expect-error its string so parsed correctly 🤞
    // args: [scaffoldConfig.mumbaiDaixAddress, address, flowRatePerSec.toString()],
    args: [scaffoldConfig.goerliDaixAddress, address, flowRatePerSec.toString()],
  });

  // delete flow
  const { writeAsync: deleteFlowFromContract, isLoading: isDeleteFlowLoading } = useScaffoldContractWrite({
    contractName: "SuperBuidl",
    functionName: "deleteFlowFromContract",
    // args: [scaffoldConfig.mumbaiDaixAddress, deleteAddress],
    args: [scaffoldConfig.goerliDaixAddress, deleteAddress],
  });

  const approve = async () => {
    setApprovalLoading(true);
    if (signer) {
      const provider = signer.provider;
      // const provider = new ethers.providers.JsonRpcProvider(
      //   "https://goerli.infura.io/v3/ce7426bf07f24fd59a2f7bbb6df217b4",
      // );

      if (provider) {
        const sf = await Framework.create({
          chainId: targetNetwork.id,
          // chainId: 31337,
          provider,
        });
        const daix = await sf.loadSuperToken("fDAIx");

        const superBuidlApproval = daix.approve({
          // @ts-expect-error this should be present
          receiver: deployedContract.address,
          amount: ethers.utils.parseEther(tokenValue).toString(),
        });

        await superBuidlApproval.exec(signer).then(function (tx) {
          console.log("Transaction hash: " + tx.hash);
        });
      }
    }
    setApprovalLoading(false);
  };

  return (
    <>
      <Head>
        <title>Super App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">SuperFluid App</span>
          </h1>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex w-full items-center border-2 border-primary rounded-lg">
            <input
              value={tokenValue}
              onChange={e => setTokenValue(e.target.value)}
              type="text"
              placeholder="0.00"
              className="input input-ghost pl-1 focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400 grow"
            />
          </div>
          <button
            className={`btn btn-primary ${approvalLoading || lumpSumpLoading ? "loading" : ""}`}
            disabled={approvalLoading || lumpSumpLoading}
            onClick={async () => {
              await approve();
              await sendLumpSumToContract();
            }}
          >
            Deposit tokens
          </button>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Address</p>
              <AddressInput value={address} onChange={e => setAddress(e)} />
            </div>
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Weekly wage(USD)</p>
              <div className="flex w-full items-center border-2 border-primary rounded-lg">
                <input
                  value={flowRatePerMonth}
                  onChange={e => {
                    setFlowRatePerMonth(e.target.value);
                    if (typeof Number(e.target.value) !== "number" || isNaN(Number(e.target.value)) === true) {
                      console.log(typeof Number(e.target.value));
                      alert("You can only calculate a flowRate based on a number");
                      return;
                    } else if (typeof Number(e.target.value) === "number") {
                      const monthlyAmount = ethers.utils.parseEther(e.target.value);
                      // @ts-expect-error this should be parsed correctly
                      const calculatedFlowRate = Math.floor(monthlyAmount / 3600 / 24 / 30);
                      console.log("⚡️ ~ file: superfluid.tsx:124 ~ calculatedFlowRate:", calculatedFlowRate);
                      setFlowRatePerSec(calculatedFlowRate);
                    }
                  }}
                  type="text"
                  placeholder="0.00"
                  className="input input-ghost pl-1 focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400 grow"
                />
              </div>
              <button
                className={`btn btn-primary ${isCreateFlowLoading ? "loading" : ""}`}
                disabled={isCreateFlowLoading}
                onClick={async () => {
                  console.log(
                    "The args passed in creat cash flow: ",
                    scaffoldConfig.mumbaiDaixAddress,
                    address,
                    flowRatePerSec,
                  );
                  await createCashFlowFromContract();
                }}
              >
                Create Flow
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Address</p>
              <AddressInput value={deleteAddress} onChange={e => setDeleteAddress(e)} />
            </div>
            <div className="flex flex-col space-y-1 w-full my-1">
              <button
                className={`btn btn-primary ${isDeleteFlowLoading ? "loading" : ""}`}
                disabled={isDeleteFlowLoading}
                onClick={async () => {
                  console.log("The args passed in delete cash flow: ", scaffoldConfig.mumbaiDaixAddress, deleteAddress);
                  await deleteFlowFromContract();
                }}
              >
                Delete Flow
              </button>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            {loadingAllStreams ? (
              <div className="mx-auto">
                <Spinner width="50" height="50" />
              </div>
            ) : allStreamsData?.streams?.length > 0 ? (
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>From Address</th>
                    <th>To Address</th>
                    <th>Current Stream / sec</th>
                  </tr>
                </thead>
                <tbody>
                  {allStreamsData.streams.map(stream => {
                    return (
                      <tr key={stream.receiver.id}>
                        <td>
                          <Address address={stream.sender.id} />
                        </td>
                        <td>
                          <Address address={stream.receiver.id} />
                        </td>
                        <td>{ethers.utils.formatEther(stream.currentFlowRate)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div>No active stream found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperFluid;
