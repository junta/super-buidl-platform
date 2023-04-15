import Head from "next/head";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { WalletIcon } from "@heroicons/react/24/outline";

const Hero: NextPage = () => {
  const { address } = useAccount();
  console.log("⚡️ ~ file: Hero.tsx:8 ~ address:", address);
  return (
    <>
      <Head>
        <title>SuperBuidl</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex items-center font-nunito-sans px-12 space-x-18">
        <div className="flex flex-col w-[65%] self-start mt-32 text-black">
          <h1 className="font-extrabold text-7xl w-[80%]">Build community and get funded!</h1>
          <p className="text-lg font-medium text-gray-400 w-[90%]">
            Join the movement towards a decentralized future and become a part of a thriving community that rewards
            innovation, creativity, and collaboration.
          </p>
          <p className="text-lg font-medium text-gray-400 w-[90%]">
            Ready to take the first step towards a brighter, more decentralized future?
          </p>
          <div className="flex space-x-4 mt-4">
            {!address && (
              <button className="btn btn-primary btn-md text-white">
                <WalletIcon className="h-6 w-6 mr-3" /> Connect wallet
              </button>
            )}
            <button className="btn btn-primary btn-outline text-white">Join the Community</button>
          </div>
        </div>
        <div className="animate-spin-slow -mr-[200px] pt-24">
          <img src="/assets/hero.svg" alt="hero" className="-mr-15" width={720} height={650} />
        </div>
      </div>
    </>
  );
};

export default Hero;
