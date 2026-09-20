import type { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

const CardRoot = ({ children }: CardRootProps) => {
  return (
    <section className="w-full flex flex-col bg-[#fafafa] dark:bg-[#222] rounded-md overflow-hidden shadow-lg shadow-zinc-200 dark:shadow-zinc-900">
      {children}
    </section>
  );
};

export default CardRoot;
