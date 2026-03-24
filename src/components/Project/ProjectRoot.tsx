import type { ReactNode } from "react";

interface ProjectRootProps {
  children: ReactNode;
}

export const ProjectRoot = ({ children }: ProjectRootProps) => {
  return (
    <main className="w-full flex justify-between items-center gap-4">{children}</main>
  );
};
