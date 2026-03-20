import { ElementType } from "react";

interface SectionProjectFlagProps {
  Flag: ElementType;
  title: string;
  goal: string;
}

export const SectionProjectFlag = ({ Flag, goal, title }: SectionProjectFlagProps) => {
  return (
    <section className="p-2 px-6 w-fit flex items-center gap-3 rounded-full bg-[#3399FF55] font-supreme">
      <Flag size={26} />
      <div>
        <h3 className="text-sm font-supreme-bold">{title}</h3>
        <p className="text-base">{goal}</p>
      </div>
    </section>
  );
};
