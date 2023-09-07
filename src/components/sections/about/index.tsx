import { Button } from "@/components/downloadButton";
import Image from "next/image";
import profileImage from "../../../../public/images/tiago-rocha.png";
import { Dictionary } from "@/types/global";

export const About = ({ dictionary }: Dictionary) => {
  const aboutDictionary = dictionary?.about || null;
  const sharedDictionary = dictionary?.shared || null;

  return (
    <section id="about" className="bg-gray-850 sm:bg-gray-750 w-full pb-28">
      <article className="container mt-36 px-4 sm:px-0">
        <header className="text-white text-center max-w-full sm:w-4/6 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {aboutDictionary?.title || ""}
          </h2>
          <p
            className="text-gray-350 text-sm sm:text-[16px]"
            dangerouslySetInnerHTML={{
              __html: aboutDictionary?.subtitle || "",
            }}
          />
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
            <h3 className="text-2xl text-white font-bold mb-2">
              {sharedDictionary?.name || ""}
            </h3>
            <p className="text-lg text-gray-300 mb-5 font-semibold">
              {sharedDictionary?.job || ""}
            </p>
            <p className="text-gray-350 text-sm leading-6">
              {aboutDictionary?.descriptionLine1 || ""}
            </p>
            <br />
            <p className="text-gray-350 text-sm leading-6">
              {aboutDictionary?.descriptionLine2 || ""}
            </p>
            <br />
            <p
              className="text-gray-350 text-sm leading-6"
              dangerouslySetInnerHTML={{
                __html: aboutDictionary?.descriptionLine3 || "",
              }}
            />
            <br />
            <p className="text-gray-350 text-sm leading-6 mb-9">
              {aboutDictionary?.descriptionLine4 || ""}
            </p>
            <Button
              text={sharedDictionary?.downloadCv || ""}
              className="block mx-auto border-hidden bg-gray-650 text-white hover:bg-white hover:text-zinc-800"
            />
          </section>
        </article>
      </article>
    </section>
  );
};
