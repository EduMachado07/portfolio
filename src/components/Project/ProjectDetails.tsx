interface ProjectDetailsProps {
  title: string;
  description: string;
  details: string[];
  children?: React.ReactNode;
}

export const ProjectDetails = ({
  title,
  description,
  details,
  children,
}: ProjectDetailsProps) => {
  return (
    <section className="w-3/5 flex flex-col gap-6">
      <div className="flex gap-6 font-bold font-supreme">
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>

      <h1 className="dark:text-[#3399FF] text-[#226EBA] font-chubbo-bold md:text-4xl text-xl">
        {title}
      </h1>
      <p className="dark:text-zinc-50 text-zinc-800 md:text-xl text-lg font-supreme text-pretty">
        {description}
      </p>

      {children}
    </section>
  );
};
