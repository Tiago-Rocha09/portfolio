import { CardProject } from "@/components/cardProject";
import aprincipal from "../../../../public/images/aprincipal.png";
import contabilhub from "../../../../public/images/contabilhub.svg";
import ctech from "../../../../public/images/ctech.png";
import eventozz from "../../../../public/images/eventozz.svg";
import { SocialLink } from "@/components/socialLink";
import { AiFillGithub } from "react-icons/ai";

export const Projects = () => {
  return (
    <section className="bg-gray-850 sm:bg-gray-750 w-full">
      <section className="container mt-28 mb-20">
        <header className="mb-12 text-center text-white sm:w-2/3 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meus projetos</h2>
          <p className="text-gray-350 text-sm sm:text-[16px]">
            Alguns dos projetos que tive a oportunidade de participar
          </p>
        </header>

        <ul className="grid grid-cols-4 gap-4">
          <li className="h-full">
            <CardProject href="https://portalctech.com.br/" src={ctech} />
          </li>
          <li className="h-full">
            <CardProject
              href="https://franquia.aprincipalbb.com.br/"
              src={aprincipal}
            />
          </li>
          <li className="h-full">
            <CardProject
              href="https://www.contabilhub.com.br/"
              src={contabilhub}
            />
          </li>
          <li className="h-full">
            <CardProject href="https://www.eventozz.com/" src={eventozz} />
          </li>
        </ul>
        <p className="flex justify-center items-center mt-9 text-white gap-2">
          <a href="https://github.com/Tiago-Rocha09" target="_blank">
            Ver mais
          </a>
          <SocialLink
            icon={
              <AiFillGithub
                size={20}
                className="hover:text-zinc-800 hover:bg-white transition-colors delay-100 ease-linear rounded-full"
              />
            }
            link="https://github.com/Tiago-Rocha09"
          />
        </p>
      </section>
    </section>
  );
};
