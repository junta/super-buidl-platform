import Head from "next/head";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { Spinner } from "~~/components/Spinner";
import { Address } from "~~/components/scaffold-eth";

export const GET_STREAMS = gql`
  query MyQuery($currentFlowRate_gt: BigInt = "0") {
    streams(where: { sender: "0x26439c143fff24b4c9114ef77f568b596613078f", currentFlowRate_gt: $currentFlowRate_gt }) {
      currentFlowRate
      token {
        symbol
      }
      receiver {
        id
      }
      sender {
        id
      }
    }
  }
`;

const Home: NextPage = () => {
  const { loading: loadingAllStreams, data: allStreamsData } = useQuery(GET_STREAMS);
  console.log("⚡️ ~ file: superfluid.tsx:42 ~ data:", allStreamsData);

  return (
    <>
      <Head>
        <title>SuperBuidl</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex flex-col justify-center space-y-6 mt-12 px-10">
        <h1 className="text-3xl ml-3">Builders</h1>
        <div className="overflow-x-auto">
          {loadingAllStreams ? (
            <div className="flex justify-center py-16">
              <Spinner width="50" height="50" />
            </div>
          ) : allStreamsData?.streams?.length > 0 ? (
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-[1rem] text-gray-400">From Address</th>
                  <th className="text-[1rem] text-gray-400">To Address</th>
                  <th className="text-[1rem] text-gray-400">Current Stream / day</th>
                </tr>
              </thead>
              <tbody>
                {allStreamsData.streams.map(stream => {
                  return (
                    <tr key={stream.receiver.id}>
                      <td className="relative mx-4">
                        <div className="shadow-lg p-4 rounded-xl">
                          <Address address={stream.sender.id} />
                        </div>
                        <span
                          style={{
                            top: "40px",
                            right: "-25px",
                            boxSizing: "border-box",
                            display: "inline-block",
                            position: "absolute",
                            overflow: "hidden",
                            width: "60px",
                            height: "18px",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                          }}
                        >
                          <img
                            alt="Superfluid stream"
                            src="https://app.superfluid.finance/gifs/stream-loop.gif"
                            decoding="async"
                            data-nimg="fixed"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "border-box",
                              padding: "0px",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </td>
                      <td>
                        <div className="shadow-lg p-4 rounded-xl">
                          <Link href={`/builder/${stream.receiver.id}`}>
                            <Address address={stream.receiver.id} />
                          </Link>
                        </div>
                      </td>
                      <td>
                        <a
                          target="_blank"
                          href={`https://console.superfluid.finance/goerli/accounts/${stream.receiver.id}?tab=streams`}
                          rel="noreferrer"
                        >
                          <div className="shadow-lg p-4 rounded-xl">
                            {Number(
                              ethers.utils.formatEther(ethers.BigNumber.from(stream.currentFlowRate).mul("86400")),
                            ).toFixed(8)}{" "}
                            DAI
                          </div>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div>No active stream found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
