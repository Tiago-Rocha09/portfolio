import Image, { StaticImageData } from "next/image";

interface CardProjectProps {
  href: string;
  src: StaticImageData;
}

export const CardProject = (props: CardProjectProps) => {
  const { href, src } = props;

  return (
    <article className="border border-gray-350 p-4 h-full flex items-center">
      <a href={href} target="_blank">
        <Image src={src} alt="Imagem do projeto" className="h-fit" />
      </a>
    </article>
  );
};
