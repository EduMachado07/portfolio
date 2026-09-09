import { Link } from "react-router-dom";
// import imgPerfil from "../../src/assets/foto_perfil.png";
import imgPerfil from "../../src/assets/perfil.jpeg";
import { GraduationCap, Laptop, MapPin } from "lucide-react";

export const Index = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 text-neutral-950">
      <header className="flex flex-row items-center px-[22%] py-6 border-b border-b-gray-300">
        <h1>Machado</h1>

        <nav className="flex flex-row gap-4 ml-auto">
          <Link to="/">Inicio</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      <main className="flex flex-col flex-1 gap-8 px-[22%]">
        <section className="p-12 flex flex-row items-center justify-between gap-4 border-zinc-300 border-x">
          <section className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <p className="bg-zinc-200 flex gap-1 p-1 px-2 text-xs font-medium rounded-xl">
                <i>
                  <MapPin size={16} />
                </i>
                São José dos Campos, SP
              </p>
              <p className="border border-zinc-300 flex gap-1 p-1 px-2 text-xs font-medium rounded-xl">
                <i>
                  <GraduationCap size={16} />
                </i>
                Graduando
              </p>
            </div>
            <p className="text-lg uppercase">Desenvolvedor Full Stack</p>
            <h1 className="text-5xl font-bold">Eduardo Machado</h1>
            <p></p>
          </section>

          <section className="flex flex-col justify-center items-center gap-4">
            <img
              src={imgPerfil}
              alt="Foto de perfil"
              className="rounded-lg shadow-lg aspect-square object-cover size-100"
            />

            <div className="flex flex-row gap-4">
              <section className="w-60 border border-zinc-300 rounded-lg p-8 flex flex-row gap-2 justify-center items-center">
                <i className="bg-zinc-200 p-2 rounded-lg">
                  <Laptop size={24} />
                </i>
                <div>
                  {/* fazer contagem projetos */}
                  <h4 className="text-2xl font-bold">8</h4>
                  <p className="text-xs">Projetos Desenvolvidos</p>
                </div>
              </section>
              
              <section className="w-60 border border-zinc-300 rounded-lg p-8 flex flex-row gap-2 justify-center items-center">
                <i className="bg-zinc-200 p-2 rounded-lg">
                  <Laptop size={24} />
                </i>
                <div>
                  {/* fazer calculo anos experiencia (atual - 2024) */}
                  <h4 className="text-2xl font-bold">2+</h4>
                  <p className="text-xs">Anos de Experiência</p>
                </div>
              </section>
            </div>

            {/* <section className="relative border border-zinc-300 rounded-lg p-4 py-6 flex flex-row gap-2 items-center">
              <i className="bg-zinc-200 p-2 rounded-2xl">
                <GraduationCap size={24} />
              </i>
              <div>
                <p className="text-sm">Formação</p>
                <h4 className="text-sm font-semibold">
                  Desenvolvimento de Software Multiplataforma - Fatec
                </h4>
              </div>

              <div className="absolute -bottom-3 -right-3 text-xs font-medium rounded-xl bg-zinc-200 border border-zinc-200 p-2 px-4">
                <p>2027</p>
              </div>
            </section> */}
          </section>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-center gap-4 px-[25%] py-6 border-t border-t-gray-300">
        <h1>Machado</h1>

        <nav>
          <ul>
            <Link to="/">Inicio</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
          </ul>
        </nav>

        <p>&copy; 2026 Eduardo Machado. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
};
