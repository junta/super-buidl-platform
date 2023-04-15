import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { Status } from "~~/components/Status";

interface Task {
  id: number;
  title: string;
  description?: string;
  speed: string;
  amount: string;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Complete TypeScript tutorial",
    description: "Learn how to use TypeScript with Node.js and React",
    speed: "0.05",
    amount: "1",
  },
  {
    id: 2,
    title: "Finish reading 'The Alchemist'",
    speed: "0.04",
    amount: "2",
  },
  {
    id: 3,
    title: "Clean the house",
    speed: "0.03",
    amount: "0.5",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fluidpay App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex flex-col space-y-2 m-5">
        {tasks.map(task => (
          <div className="card w-120 bg-base-100 shadow-xl" key={task.id}>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title mb-0 mr-10">{task.title}</h2>
                <Status speed={task.speed} amount={task.amount} />
              </div>
              <p>{task.description}</p>
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
        ))}
      </div>
    </>
  );
};

export default Home;
