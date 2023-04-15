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

      <div className="flex flex-col space-y-2 m-5">
        <div className="card w-120 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h2 className="card-title mb-0 mr-10">Task1</h2>
              <Status speed="0.5eth/min" amount="1.5" />
            </div>
            <p>description description description</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href="/submit">Submit Progress</Link>
              </button>
              <button className="btn btn-primary">
                <Link href="/challengepage">Challenge</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
