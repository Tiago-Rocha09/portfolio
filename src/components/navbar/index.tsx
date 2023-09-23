"use client";
import { useEffect, useRef, useState } from "react";
import { ImMenu } from "react-icons/im";
import { FaChevronDown } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { SocialLink } from "../socialLink";
import Link from "next/link";

export const Navbar = ({
  dictionary,
  language,
}: {
  dictionary: any;
  language: string;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLUListElement>(null);
  const navbarDictionary = dictionary?.navbar || null;

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      if (clickedElement.tagName.toLowerCase() === "a") {
        setMenuOpen(false);
      }
      if (!ref.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <nav className="bg-gray-750 h-16 flex sm:block justify-end items-center px-4">
      <ImMenu
        className="text-4xl text-white block sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <ul
        ref={ref}
        className={`container block fixed top-0 w-4/5 right-0 pt-16 bg-gray-750 z-10
                    sm:pt-0 sm:h-auto sm:w-full sm:relative sm:flex sm:justify-center sm:opacity-100
                    ${
                      menuOpen ? "opacity-100 h-screen z-10" : "opacity-0 h-0 -z-10"
                    } sm:visible
                    transition-all delay-150
                  `}
      >
        <li>
          <AiOutlineClose
            className="text-4xl text-white block sm:hidden font-bold absolute right-4 top-4"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </li>
        <li className="p-5 text-sm font-bold text-gray-300 border-b border-b-gray-700 sm:border-b-0">
          <a href="#home">{navbarDictionary?.home || ""}</a>
        </li>
        <li className="p-5 text-sm font-bold text-gray-300 border-b border-b-gray-700 sm:border-b-0">
          <a href="#about">{navbarDictionary?.about || ""}</a>
        </li>
        <li className="p-5 text-sm font-bold text-gray-300 border-b border-b-gray-700 sm:border-b-0">
          <a href="#skills">{navbarDictionary?.skills || ""}</a>
        </li>
        <li className="p-5 text-sm font-bold text-gray-300 border-b border-b-gray-700 sm:border-b-0">
          <a href="#portfolio">{navbarDictionary?.portfolio || ""}</a>
        </li>
        <li className="p-5 text-sm font-bold text-gray-300 border-b border-b-gray-700 sm:border-b-0">
          <a href="#contact">{navbarDictionary?.contact || ""}</a>
        </li>
        <li
          className="p-5 relative text-sm font-bold text-gray-300 border-b border-b-gray-700 
        sm:border-b-0 sm:flex sm:items-center sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-0"
        >
          <button className="group block sm:flex sm:gap-2 sm:items-center w-full sm:w-auto">
            <h2 className="flex gap-2 items-center">
              {language?.toLocaleUpperCase()} <FaChevronDown size={12} />
            </h2>
            <menu
              className="opacity-0 invisible h-0 hidden sm:block
              group-hover:block group-hover:visible group-hover:opacity-100 group-hover:h-fit
              group-active:opacity-100 group-active:visible group-active:block group-active:h-fit
               relative sm:w-24 px-0
              sm:absolute sm:bottom-0  sm:text-center sm:bg-gray-750 p-5 sm:pt-3 sm:translate-y-full rounded-lg transition-all delay-150 sm:h-fit"
            >
              <li className="py-2 p-5 text-start sm:text-center border-b border-b-gray-700 sm:border-b-0">
                <Link href="/en">EN</Link>
              </li>
              <li className="py-2 p-5 text-start sm:text-center border-b border-b-gray-700 sm:border-b-0">
                <Link href="/pt-br">PT-BR</Link>
              </li>
            </menu>
          </button>
        </li>
        <li className="p-5 flex gap-2 text-gray-300 sm:hidden">
          <SocialLink
            icon={
              <AiFillGithub
                size={40}
                className="hover:text-zinc-800 hover:bg-white transition-colors delay-100 ease-linear rounded-full"
              />
            }
            link="https://github.com/Tiago-Rocha09"
          />
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
    </nav>
  );
};
