import { useState } from "react";
import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { TaskContext } from "../TaskContext";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { Status } from "~~/components/Status";
import { Address } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import scaffoldConfig from "~~/scaffold.config";

const Builder: NextPage = () => {
  const tasks = useContext(TaskContext);
  const { query } = useRouter();

  const [doneClaim, setDoneClaim] = useState(false);

  const statement = "0xIBuki.eth has stopped sumibtting working progress from April 1st, 2023.";
  const statementByte = ethers.utils.formatBytes32String("test");
  const workerAddress = "0xD8fEBA98bc4418290568a9111821dE2dc84E9F3E";
  const jobId = ethers.utils.formatBytes32String("15435");
  // console.log("dataID: ", dataId);

  // TODO: should be signer address
  const asserter = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

  const { writeAsync: assertDataFor, isLoading: assertDataForLoading } = useScaffoldContractWrite({
    contractName: "WorkerAttester",
    functionName: "assertDataFor",
    args: [workerAddress, jobId, statementByte, asserter],
  });

  // delete flow
  const { writeAsync: deleteFlowFromContract, isLoading: isDeleteFlowLoading } = useScaffoldContractWrite({
    contractName: "SuperBuidl",
    functionName: "deleteFlowFromContract",
    // args: [scaffoldConfig.mumbaiDaixAddress, deleteAddress],
    args: [scaffoldConfig.goerliDaixAddress, workerAddress],
  });

  return (
    <>
      <Head>
        <title>Fluidpay App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex flex-col space-y-2 m-5"></div>

      <div className="card w-120 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-0 mr-10">
            <Address address={query.address} />
          </h2>
          <div className="flex justify-between items-center">
            <h2 className="card-title mb-0 mr-10">Add push protocol integration</h2>
            <Status speed="35" amount="22,623" />
          </div>
          <p>detailed work description</p>
          <h2>Progress</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Submission Datetime</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>23:45, April 23th 2023</td>
                  <td>
                    1. Import multisigs to localstorage: https://github.com/austintgriffith/maas/pull/9 2. Reducing
                    renders of transaction list items to prevent re-rendering issues:
                    https://github.com/austintgriffith/maas/pull/10
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>22:12, April 22th 2023</td>
                  <td>
                    1. Scaffold-ETH x Tailwind: https://github.com/stevenpslade/scaffold-eth-tailwind 2. Multisig.lol
                    improvements: https://github.com/austintgriffith/maas/pull/8 and
                    https://github.com/austintgriffith/maas/pull/6
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>21:02, April 21th 2023</td>
                  <td>
                    1. EIP712 Version of Multisig.lol 2. Staking Contract with Permit2 3. Vesting Vault with a cliff 4.
                    ERC20 with Tax on transfer 5. Some defi hack reproduction using foundry
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link href="/submit">Submit Progress</Link>
            </button>
            {!doneClaim && (
              <label htmlFor="my-modal" className="btn">
                Challenge
              </label>
            )}
            {doneClaim && (
              <label
                className="btn"
                onClick={async () => {
                  await deleteFlowFromContract();
                }}
              >
                Stop Payment
              </label>
            )}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </label>
                <h3 className="font-bold text-lg">Claim to 0xIbuki.eth</h3>
                <p className="py-4">Please input reason why stop payment to 0xIbuki.eth clearly.</p>
                <textarea
                  value="0xIBuki.eth has stopped sumibtting working progress from April 1st, 2023."
                  placeholder="0xIBuki.eth has stopped sumibtting working progress from April 1st, 2023."
                  className="input border w-full font-medium"
                />
                <div className="modal-action">
                  <button
                    className="btn btn-primary"
                    onClick={async () => {
                      await assertDataFor();
                      setDoneClaim(true);
                    }}
                  >
                    claim to delete money flow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Builder;
