import type { ReactNode } from "react";

interface SectionProjectRootProps {
  children: ReactNode;
}

const SectionProjectRoot = ({ children }: SectionProjectRootProps) => {
  return (
    <section className="w-full flex justify-between items-center gap-10">{children}</section>
  );
};

export default SectionProjectRoot;
