import type { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

const CardRoot = ({ children }: CardRootProps) => {
  return (
    <section className="w-full flex flex-col gap-2 dark:bg-[#222] rounded-lg overflow-hidden shadow-lg dark:shadow-zinc-900">
      {children}
    </section>
  );
};

export default CardRoot;
