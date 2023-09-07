import Image from "next/image";
import profileImage from "../../../../public/images/tiago-rocha.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SocialLink } from "@/components/socialLink";
import { Button } from "@/components/downloadButton";

export const Home = () => {
  return (
    <section id="home" className="bg-gray-850 w-full">
      <section className="container flex relative">
        <header className="flex flex-col text-white mt-auto mb-auto gap-3 w-full sm:w-auto p-4 sm:p-0 pt-28 sm:pt-0 pb-36 sm:pb-0">
          <p className="text-lg sm:text-2xl font-semibold">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-7xl font-bold">Tiago Rocha.</h1>
          <p className="text-2xl sm:text-3xl font-semibold">
            Full Stack developer
          </p>
          <Button
            text="DOWNLOAD CV"
            className="bg-transparent hover:bg-white hover:text-zinc-800 border-white hover:border-zinc-800 my-8"
          />
          <ul className="flex gap-2">
            <li>
              <SocialLink
                icon={
                  <AiFillGithub
                    size={40}
                    className="hover:text-zinc-800 hover:bg-white transition-colors delay-100 ease-linear rounded-full"
                  />
                }
                link="https://github.com/Tiago-Rocha09"
              />
            </li>
            <li>
              <SocialLink
                icon={
                  <AiFillLinkedin
                    size={40}
                    className="hover:text-blue-600 hover:bg-white transition-colors delay-100 ease-linear"
                  />
                }
                link="https://www.linkedin.com/in/tiago-rocha-206937184/"
              />
            </li>
          </ul>
        </header>
        <aside>
          <figure className="hidden sm:block">
            <Image
              src={profileImage}
              alt="Foto de Tiago Rocha"
              className="max-w-lg"
            />
          </figure>
        </aside>
      </section>
    </section>
  );
};
