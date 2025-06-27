interface CardImageProps {
  img: string
}

const CardImage = ({ img }: CardImageProps) => {
  return (
    <div className="relative w-full h-80">
      <img
        src={img}
        alt="Imagem do projeto"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
    </div>
  )
}

export default CardImage; 