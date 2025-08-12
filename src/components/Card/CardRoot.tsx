import type { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

const CardRoot = ({ children }: CardRootProps) => {
  return (
    <section className="w-full flex flex-col dark:bg-[#222] rounded-md overflow-hidden shadow-lg dark:shadow-zinc-900">
      {children}
    </section>
  );
};

export default CardRoot;
