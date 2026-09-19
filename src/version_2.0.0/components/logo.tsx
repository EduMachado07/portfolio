import logoImg from "@/assets/bateria/img_logo.png";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return <img src={logoImg} alt="Logo - baquetas de bateria" className={className} />;
};
