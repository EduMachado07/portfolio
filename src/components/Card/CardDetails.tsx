import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface CardDetailsProps {
  title: string;
  description: string;
  linkProject: string;
  year: number;
  type: string[];
}

const CardDetails = ({
  title,
  description,
  linkProject,
  type,
  year
}: CardDetailsProps) => {
  return (
    <section className="flex flex-col justify-between gap-2 p-4">
      <section className="h-max flex flex-col gap-2">
        <h1 className="text-[#3399FF] font-chubbo-bold text-2xl line-clamp-1">{title}</h1> {/* title */}
        <div className="flex gap-2">
          {type.slice(0, 4).map((tag, index) => (
            <div
              key={index}
              className="dark:text-zinc-50 dark:border-zinc-50 rounded-sm border-2 px-2 py-0.5 text-sm font-supreme"
            >
              {tag}
            </div>
          ))}

          {type.length > 4 && (
            <div className="text-lg dark:text-zinc-50 flex items-end">...</div>
          )}
        </div>
        <p className="dark:text-zinc-200 font-supreme line-clamp-3">{description}</p> {/* description */}
      </section>
      {/* link page project */}
      <section className="flex items-end justify-between">
        <div
          className="flex gap-1.5 items-center dark:text-zinc-50 rounded-sm text-base font-supreme"
        >
          <Calendar size={22} />
          {year}
        </div>
        <Link to={linkProject}>
          <Button size="sm"
            variant="link"
            className="group relative overflow-hidden gap-2">
            Saber mais
            <ArrowRight className="transition-transform duration-200 transform -translate-x-0.5 group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </section>
    </section>
  );
};

export default CardDetails;
