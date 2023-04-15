import React from "react";
import { ReactNode } from "react";

// Task context provider
interface TaskProviderProps {
  children: ReactNode;
}

// Interface for Task
interface Task {
  id: number;
  title: string;
  description?: string;
  speed: string;
  amount: string;
}

// Tasks array
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
