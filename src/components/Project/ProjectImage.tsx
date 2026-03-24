interface ProjectImageProps {
  img: string;
  alt: string;
}

export const ProjectImage = ({ img, alt }: ProjectImageProps) => {
  return (
    <section className="h-[70dvh] w-2/5 object-cover rounded-md overflow-hidden">
      <img src={img} alt={alt} className="h-full w-full object-cover" />
    </section>
  );
};
