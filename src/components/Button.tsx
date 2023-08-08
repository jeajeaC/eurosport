import type { ReactNode } from "react";
type ButtonProps = {
  children: ReactNode;
  id: string;
};

export default function Button({ children, id }: ButtonProps) {
  return (
    <button
      className="bg-gray-400 dark:bg-gray-700 border-white dark:border-black rounded-md border-2 p-2 hover:border-solid hover:border-blue-200 dark:hover:border-blue-800 duration-300"
      id={id}
    >
      {children}
    </button>
  );
}
