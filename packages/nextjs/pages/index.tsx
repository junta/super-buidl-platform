import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { Status } from "~~/components/Status";

const Home: NextPage = () => {
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
        </div>
      </div>
    </>
  );
};

export default Home;
