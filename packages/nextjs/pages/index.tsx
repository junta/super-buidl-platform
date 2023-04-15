import { useCallback, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import type { ISuccessResult } from "@worldcoin/idkit";
import { IDKitWidget } from "@worldcoin/idkit";
import type { NextPage } from "next";
import { Status } from "~~/components/Status";

const Home: NextPage = () => {
  const [hideWorldCoin, setHideWorldCoin] = useState(false);
  const handleProof = useCallback((result: ISuccessResult) => {
    return new Promise<void>(resolve => {
      console.log("The result after verification is : ", result);
      setTimeout(() => {
        resolve();
      }, 3000);
      // NOTE: Example of how to decline the verification request and show an error message to the user
    });
  }, []);

  const onSuccess = (result: ISuccessResult) => {
    setHideWorldCoin(true);
    console.log(result);
  };
  return (
    <>
      <Head>
        <title>Fluidpay App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Member List</span>
          </h1>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="card w-120 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title mb-0 mr-10">Vitalik Buterin</h2>
                <Status speed="0.5eth/min" amount="1.5" />
              </div>
              <p>description description description</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <Link href="/userpage">View</Link>
                </button>
              </div>
            </div>
          </div>
          {!hideWorldCoin && (
            <div className="flex self-center">
              <IDKitWidget
                action="my_action"
                signal="my_signal"
                onSuccess={onSuccess}
                handleVerify={handleProof}
                app_id="app_staging_756f745d746fd2cdbfac178eaf4a5cac"
              >
                {({ open }) => (
                  <button className="btn btn-primary" onClick={open}>
                    Connect with world coin
                  </button>
                )}
              </IDKitWidget>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
