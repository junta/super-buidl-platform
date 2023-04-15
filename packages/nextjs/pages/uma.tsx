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
  const [tokenValue, setTokenValue] = useState("");
  const targetNetwork = getTargetNetwork();
  const { data: signer } = useSigner();
  const { data: deployedContract } = useDeployedContractInfo("SuperBuidl");
  const [approvalLoading, setApprovalLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [deleteAddress, setDeleteAddress] = useState("");
  const [flowRatePerMonth, setFlowRatePerMonth] = useState("");
  const [flowRatePerSec, setFlowRatePerSec] = useState(0);
  // const { data: superBuidl } = useScaffoldContract({
  //   contractName: "SuperBuidl",
  //   signerOrProvider: signer,
  // });
  // sendLumpSum
  const jobId = ethers.utils.formatBytes32String("15435");
  // console.log("dataID: ", dataId);
  const statement = ethers.utils.formatBytes32String("workere A has stopped working");
  const asserter = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

  const { writeAsync: assertDataFor, isLoading: lumpSumpLoading } = useScaffoldContractWrite({
    contractName: "WorkerAttester",
    functionName: "assertDataFor",
    args: [jobId, statement, asserter],
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
          <button
            className={`btn btn-primary ${approvalLoading || lumpSumpLoading ? "loading" : ""}`}
            disabled={approvalLoading || lumpSumpLoading}
            onClick={async () => {
              await assertDataFor();
            }}
          >
            attest
          </button>
        </div>
      </div>
    </>
  );
};

export default SuperFluid;
