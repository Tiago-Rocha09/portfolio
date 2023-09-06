import { DownloadButton } from "@/components/downloadButton";
import Image from "next/image";
import profileImage from "../../../../public/images/tiago-rocha.png";

export const About = () => {
  return (
    <section className="bg-gray-850 sm:bg-gray-750 w-full pb-28">
      <article className="container mt-36 px-4 sm:px-0">
        <header className="text-white text-center max-w-full sm:w-4/6 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-350 text-sm sm:text-[16px]">
            Atuo no mercado de progamação desde 2017. Experiência com trabalho
            remoto há mais de 2 anos. Tenho graduação em Engenharia da
            Computação pela <abbr>UNIFESSPA</abbr> (Universidade Federal do Sul
            e Sudeste do Pará).
          </p>
        </header>
        <article className="block sm:flex sm:mt-14">
          <aside className="block sm:hidden mb-12">
            <figure>
              <Image
                src={profileImage}
                alt="Foto de Tiago Rocha"
                className="max-h-[450px]"
              />
            </figure>
          </aside>
          <section>
            <h3 className="text-2xl text-white font-bold mb-2">Tiago Rocha</h3>
            <p className="text-lg text-gray-300 mb-5 font-semibold">
              Full Stack Developer
            </p>
            <p className="text-gray-350 text-sm leading-6">
              Com mais de 5 anos no mercado de desenvolvimento de software,
              trabalho com javascript em aplicações no front-end, back-end e
              mobile. A área que tenho mais experiência é o desenvolvimento
              front-end utilizando React.js, as vezes o utilizando ao lado
              Next.js.
            </p>
            <br />
            <p className="text-gray-350 text-sm leading-6">
              Tenho aprimorado meu trabalho com o desenvolvimento de APIs REST
              utilizando Node.js e sempre que possível me envolvo na construção
              de aplicações mobiles nos projetos da minha empresa Ctech.
            </p>
            <br />
            <p className="text-gray-350 text-sm leading-6">
              Participei da criação de vários sites e seus sistemas de
              gerenciamento, como:{" "}
              <a href="https://www.eventozz.com/">Eventozz</a> e{" "}
              <a href="https://www.contabilhub.com.br/">contábilhub.</a> Tenho
              experiência com trabalho remoto já há mais de dois anos, sempre
              utilizando ferramentas como Trello/Jira e git.
            </p>
            <br />
            <p className="text-gray-350 text-sm leading-6 mb-9">
              Tenho experiência com trabalho remoto já há mais de dois anos,
              sempre utilizando ferramentas como Trello/Jira e git.
            </p>
            <DownloadButton className="block mx-auto border-hidden bg-gray-650 text-white hover:bg-white hover:text-zinc-800" />
          </section>
        </article>
      </article>
    </section>
  );
};
