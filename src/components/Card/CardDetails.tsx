import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface CardDetailsProps {
  title: string;
  description: string;
  linkProject: string;
  type: string[];
}

const CardDetails = ({
  title,
  description,
  linkProject,
  type,
}: CardDetailsProps) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <section className="flex gap-2 flex-wrap">
        {/* type project */}
        {type.map((tag, index) => (
          <div
            key={index}
            className="dark:text-zinc-50 rounded-sm border-2 px-2 py-0.5 text-sm font-supreme"
          >
            #{tag}
          </div>
        ))}
      </section>
      <h1 className="text-[#3399FF] font-chubbo-bold text-2xl">{title}</h1> {/* title */}
      <p className="dark:text-white font-supreme">{description}</p> {/* description */}
      {/* link page project */}
      <div className="text-right">
        <Link to={linkProject}>
          <Button
            size="sm"
            variant="link"
            className="font-chubbo text-base group relative overflow-hidden gap-2"
          >
            Ver projeto
            <ArrowRight className="transition-transform duration-200 transform opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardDetails;
