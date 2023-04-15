import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { TaskContext } from "./TaskContext";
import type { NextPage } from "next";
import { Status } from "~~/components/Status";

const Home: NextPage = () => {
  const tasks = useContext(TaskContext);

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
              <Link href="/detail">
                <h2 className="card-title mb-0 mr-10">{task.title}</h2>
              </Link>
              <Status speed={task.speed} amount={task.amount} />
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href="/detail">Detail</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
