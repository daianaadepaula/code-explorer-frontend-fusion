import homeImg from "./../assets/image/homeImg.png";

const Home = () => {
  return (
    <main className="flex flex-col gap-5 md:h-[75vh] md:flex-row md:justify-between items-center my-7 lg:mt-15">
      <div className="flex flex-col w-3/5 p-1 md:w-3/6">
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-center lg:text-left tracking-wide">
          Eu sou uma desenvolvedora criativa e profissional.
        </h1>

        <p className="mt-10 text-lg text-center lg:text-left text-neutral-400 max-w-4xl">
          A minha jornada para ser desenvolvedora começou com uma curiosidade.
          Inicialmente, eu não tinha interesse na área e não via muitas
          oportunidades. Mas, com o tempo, me apaixonei por essa área e comecei
          a entender a importância do desenvolvimento web. É uma área
          desafiadora, mas muito recompensadora. Sou apaixonada pelo que faço e
          busco evoluir a cada dia, seja aprendendo algo novo ou aprimorando
          meus conhecimentos.
          <br />
          Durante essa jornada, conheci o Frontend Fusion, um projeto
          colaborativo que visa desenvolver soluções de frontend de alta
          qualidade para diversos propósitos. Valorizamos e encorajamos
          contribuições de todos os níveis de habilidade e experiência.
        </p>
      </div>

      
      <div className="w-4/5 md:w-3/6">
        <img src={homeImg} alt="imagem de home" />
      </div>

    </main>
  );
};

export default Home;
