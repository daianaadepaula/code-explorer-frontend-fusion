import { LinkedinIcon, InstagramIcon, FacebookIcon, Twitter } from "lucide-react";

const Home = () => {
  return (
    <main className="flex flex-col items-center my-7 lg:mt-15">
      <h1 className="text-xl mt-10 sm:text-3xl lg:text-4xl text-center tracking-wide">
        Eu sou uma desenvolvedora criativa e profissional.
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        A minha jornada para ser desenvolvedora começou com uma curiosidade.
        Inicialmente, eu não tinha interesse na área e não via muitas
        oportunidades. Mas, com o tempo, me apaixonei por essa área e comecei a
        entender a importância do desenvolvimento web. É uma área desafiadora,
        mas muito recompensadora. Sou apaixonada pelo que faço e busco evoluir a
        cada dia, seja aprendendo algo novo ou aprimorando meus conhecimentos.
				<br />
        Durante essa jornada, conheci o Frontend Fusion, um projeto colaborativo
        que visa desenvolver soluções de frontend de alta qualidade para
        diversos propósitos. Valorizamos e encorajamos contribuições de todos os
        níveis de habilidade e experiência.
      </p>

      <div className="flex flex-wrap gap-5 justify-center my-10">
        <div className="flex">
          <a
            href=""
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-neutral-700 rounded-full transition-colors hover:text-indigo-300"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
        <div className="flex">
          <a
            href=""
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-neutral-700 rounded-full transition-colors hover:text-indigo-300"
          >
            <InstagramIcon size={16} />
          </a>
        </div>
        <div className="flex">
          <a
            href=""
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-neutral-700 rounded-full transition-colors hover:text-indigo-300"
          >
            <FacebookIcon size={16} />
          </a>
        </div>
        <div className="flex">
          <a
            href=""
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-neutral-700 rounded-full transition-colors hover:text-indigo-300"
          >
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
