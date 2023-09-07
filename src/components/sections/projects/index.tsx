import { CardProject } from "@/components/cardProject";
import aprincipal from "../../../../public/images/aprincipal.png";
import contabilhub from "../../../../public/images/contabilhub.svg";
import ctech from "../../../../public/images/ctech.png";
import eventozz from "../../../../public/images/eventozz.svg";
import { SocialLink } from "@/components/socialLink";
import { AiFillGithub } from "react-icons/ai";
import { Dictionary } from "@/types/global";

export const Projects = ({ dictionary }: Dictionary) => {
  const projectsDictionary = dictionary?.projects || null;

  return (
    <section id="portfolio" className="bg-gray-850 sm:bg-gray-750 w-full">
      <section className="container mt-28 mb-20 px-4 sm:px-0">
        <header className="mb-12 text-center text-white sm:w-2/3 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {projectsDictionary?.title || ""}
          </h2>
          <p className="text-gray-350 text-sm sm:text-[16px]">
            {projectsDictionary?.subtitle || ""}
          </p>
        </header>

        <ul className="flex flex-col sm:grid sm:grid-cols-4 gap-4">
          <li className="h-full">
            <CardProject
              href="https://portalctech.com.br/"
              src={ctech}
              alt={projectsDictionary?.altLogoCard1 || ""}
            />
          </li>
          <li className="h-full">
            <CardProject
              href="https://franquia.aprincipalbb.com.br/"
              src={aprincipal}
              alt={projectsDictionary?.altLogoCard2 || ""}
            />
          </li>
          <li className="h-full">
            <CardProject
              href="https://www.contabilhub.com.br/"
              src={contabilhub}
              alt={projectsDictionary?.altLogoCard3 || ""}
            />
          </li>
          <li className="h-full">
            <CardProject
              href="https://www.eventozz.com/"
              src={eventozz}
              alt={projectsDictionary?.altLogoCard4 || ""}
            />
          </li>
        </ul>
        <p className="flex justify-center items-center mt-9 text-white gap-2">
          <a href="https://github.com/Tiago-Rocha09" target="_blank">
            {projectsDictionary?.viewMore || ""}
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
