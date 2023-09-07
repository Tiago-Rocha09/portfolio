import Image, { StaticImageData } from "next/image";

interface CardProjectProps {
  href: string;
  alt: string;
  src: StaticImageData;
}

export const CardProject = (props: CardProjectProps) => {
  const { href, src, alt } = props;

  return (
    <article className="border border-gray-350 p-4 h-52 w-auto sm:h-full flex items-center">
      <a
        href={href}
        target="_blank"
        className="max-h-full max-w-full h-full sm:h-auto flex sm:inline justify-center items-center m-auto sm:m-0"
      >
        <Image
          src={src}
          alt={alt}
          className="max-h-full max-w-full w-auto sm:h-fit"
        />
      </a>
    </article>
  );
};
