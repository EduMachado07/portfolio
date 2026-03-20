import { ReactNode } from "react";

interface SectionProjectDetailsProps {
  details: string[];
  title: string;
  description: string;
  children: ReactNode;
}

export const SectionProjectDetails = ({
  details,
  title,
  description,
  children,
}: SectionProjectDetailsProps) => {
  return (
    <div className="pr-6 flex flex-col gap-5">
      <div className="flex gap-6 font-bold font-supreme">
        {details.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <h1 className="dark:text-[#3399FF] text-[#226EBA] font-chubbo-bold md:text-4xl text-xl text-pretty">
        {title}
      </h1>
      <p className="dark:text-zinc-50 text-zinc-800 md:text-xl text-lg font-supreme text-pretty">
        {description}
      </p>

      {children}
    </div>
  );
};
