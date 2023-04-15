import { useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { TaskContext } from "./TaskContext";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { Status } from "~~/components/Status";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import scaffoldConfig from "~~/scaffold.config";

const Home: NextPage = () => {
  const tasks = useContext(TaskContext);
  console.log(tasks);

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
      {tasks?.tasks?.map(task => (
        <div className="card w-120 bg-base-100 shadow-xl" key={task.id}>
          <div className="card-body">
            <h2 className="card-title mb-0 mr-10">{task.worker}</h2>
            <div className="flex justify-between items-center">
              <h2 className="card-title mb-0 mr-10">{task.title}</h2>
              <Status speed={task.speed} amount={task.amount} />
            </div>
            <p>{task.description}</p>
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
      ))}
    </>
  );
};

export default Home;
