interface ProjectItemProps {
    Icon: React.ElementType;
    text: string;
}

export const ProjectItem = ({ Icon, text }: ProjectItemProps) => {
  return (
    <section className="text-sm p-3 px-4 w-fit flex items-center gap-2 rounded-full bg-[#3399FF3f]">
      <Icon size={20} />
      <p>{text}</p>
    </section>
  );
};
