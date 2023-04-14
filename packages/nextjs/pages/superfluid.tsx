import { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";

const SuperFluid: NextPage = () => {
  const [tokenValue, setTokenValue] = useState("");
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
          <button className="btn btn-primary">Create Flow</button>
        </div>
      </div>
    </>
  );
};

export default SuperFluid;
