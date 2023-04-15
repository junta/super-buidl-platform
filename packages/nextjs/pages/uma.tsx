import { useState } from "react";
import Head from "next/head";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { useSigner } from "wagmi";
import { useDeployedContractInfo, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import scaffoldConfig from "~~/scaffold.config";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

export const NUMBER_REGEX = /^\.?\d+\.?\d*$/;

const SuperFluid: NextPage = () => {
  // const [statement, setStatement] = useState("");
  const { data: signer } = useSigner();
  const { data: deployedContract } = useDeployedContractInfo("SuperBuidl");
  const [approvalLoading, setApprovalLoading] = useState(false);

  // TODO: should be dynamic
  const statement = "0xIBuki.eth has stopped sumibtting working progress from April 1st, 2023.";
  const statementByte = ethers.utils.formatBytes32String("test");
  // const workerAddress = "0xD8fEBA98bc4418290568a9111821dE2dc84E9F3E";
  const workerAddress = "0x1e88f23864a8FE784eB152967AccDb394D3b88AD";
  const jobId = ethers.utils.formatBytes32String("15435");
  // console.log("dataID: ", dataId);

  // TODO: should be signer address
  const asserter = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

  const { writeAsync: assertDataFor, isLoading: lumpSumpLoading } = useScaffoldContractWrite({
    contractName: "WorkerAttester",
    functionName: "assertDataFor",
    args: [workerAddress, jobId, statementByte, asserter],
  });
  // ------------------

  return (
    <>
      <Head>
        <title>Super App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex flex-col space-y-5">
          <p className="font-semibold text-xl ml-1 my-0 break-words">Address attest to: {workerAddress}</p>
          <div className="flex w-full items-center border-2 border-primary rounded-lg">
            <input
              type="text"
              value="0xIBuki.eth has stopped sumibtting working progress from April 1st, 2023."
              placeholder="0xIBuki.eth has stopped sumibtting working progress from April 1st, 2023."
              className="input input-ghost pl-1 focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400 grow"
            />
          </div>
          <button
            className={`btn btn-primary ${approvalLoading || lumpSumpLoading ? "loading" : ""}`}
            disabled={approvalLoading || lumpSumpLoading}
            onClick={async () => {
              await assertDataFor();
            }}
          >
            claim to delete money flow
          </button>
        </div>
      </div>
    </>
  );
};

export default SuperFluid;
