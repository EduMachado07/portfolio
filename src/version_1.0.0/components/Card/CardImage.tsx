import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface CardImageProps {
  img: string,
  linkProject: string
}

const CardImage = ({ img, linkProject }: CardImageProps) => {
  return (
    <div className="relative w-full group">
      <img
        src={img}
        alt="Imagem do projeto"
        className="w-full h-full object-cover"
      />
      <div className="bg-zinc-950/80 absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 invisible transition-all duration-300 transform group-hover:visible group-hover:opacity-100"
      >
        <a href={linkProject} target="_blank">
          <Button variant="link" className="group/item text-zinc-300 hover:text-zinc-50 font-chubbo text-lg cursor-pointer hover:underline underline-offset-2">
            Abrir projeto
            <ArrowRight className="transition-transform duration-200 transform opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
          </Button>
        </a>
      </div>

    </div>
  )
}

export default CardImage; 