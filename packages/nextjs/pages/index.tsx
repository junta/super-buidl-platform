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
        <title>Fluidpay App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex flex-col justify-center items-center spacey-y-6">
        <h1 className="text-center text-3xl">Builders</h1>
        <div className="overflow-x-auto w-[50%]">
          {loadingAllStreams ? (
            <div className="mx-auto">
              <Spinner width="50" height="50" />
            </div>
          ) : allStreamsData?.streams?.length > 0 ? (
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>From Address</th>
                  <th>To Address</th>
                  <th>Current Stream / sec</th>
                </tr>
              </thead>
              <tbody>
                {allStreamsData.streams.map(stream => {
                  return (
                    <tr key={stream.receiver.id}>
                      <td>
                        <Address address={stream.sender.id} />
                      </td>
                      <td>
                        <Link href={`/builder/${stream.receiver.id}`}>
                          <Address address={stream.receiver.id} />
                        </Link>
                      </td>
                      <td>{ethers.utils.formatEther(stream.currentFlowRate)}</td>
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
