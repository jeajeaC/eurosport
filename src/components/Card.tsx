import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg w-80">
      {children}
    </div>
  );
}
