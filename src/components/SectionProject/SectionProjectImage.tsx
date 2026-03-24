interface SectionProjectImageProps {
  img: string;
}

export const SectionProjectImage = ({ img }: SectionProjectImageProps) => {
  return (
    <section className="w-full h-[70dvh] rounded-md overflow-hidden">
      <img src={img} alt="project image" className="h-full w-full object-cover" />
    </section>
  );
};
