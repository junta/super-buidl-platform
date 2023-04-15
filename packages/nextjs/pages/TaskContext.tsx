import React from "react";
import { ReactNode } from "react";

// Task context provider
interface TaskProviderProps {
  children: ReactNode;
}

// Interface for Task
interface Task {
  id?: number;
  worker: string;
  title: string;
  description?: string;
  speed: string;
  amount?: string;
}

// Tasks array
const tasks: Task[] = [
  {
    id: 1,
    worker: "0xIbuki.eth",
    title: "Integrate Worldcoin SDK for user authentication",
    description: "implement contract hot reload function",
    speed: "20",
    amount: "5,612",
  },
  {
    id: 2,
    worker: "shivbhonde.eth",
    title: "Add push protocol integration",
    description: "detailed work description",
    speed: "35",
    amount: "22,623",
  },
  {
    id: 3,
    worker: "0xJustin.eth",
    title: "Migrate to latest version of Nest.js",
    description: "detailed work description",
    speed: "42",
    amount: "17,543",
  },
];

// Task context
interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
}

const TaskContext = React.createContext<TaskContextType | undefined>(undefined);

// Task context provider
const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [taskState, setTaskState] = React.useState(tasks);

  const addTask = (task: Task) => {
    setTaskState([...taskState, task]);
  };

  const removeTask = (id: number) => {
    setTaskState(taskState.filter(task => task.id !== id));
  };

  return <TaskContext.Provider value={{ tasks: taskState, addTask, removeTask }}>{children}</TaskContext.Provider>;
};

export { TaskContext, TaskProvider };
