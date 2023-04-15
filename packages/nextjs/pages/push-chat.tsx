import Head from "next/head";
import { Chat } from "@pushprotocol/uiweb";
import type { NextPage } from "next";
import { useSigner } from "wagmi";

const PushChat: NextPage = () => {
  const { data: signer } = useSigner();
  return (
    <>
      <Head>
        <title>Fluidpay App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex items-center flex-col flex-grow pt-10">
        {signer && (
          <Chat
            account={"0x55b9CB0bCf56057010b9c471e7D42d60e1111EEa"} //user address
            supportAddress="0x1A2d838c4bbd1e73d162d0777d142c1d783Cb831" //support address
            // @ts-expect-error correct signer type
            signer={signer}
          />
        )}
      </div>
    </>
  );
};

export default PushChat;
