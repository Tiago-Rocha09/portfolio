"use client";
import { useEffect, useRef, useState } from "react";
import { ImMenu } from "react-icons/im";
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { SocialLink } from "../socialLink";

export const Navbar = ({ dictionary }: { dictionary: any }) => {
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
                    sm:pt-0 sm:h-auto sm:w-full sm:relative sm:flex sm:justify-end sm:opacity-100
                    ${
                      menuOpen ? "opacity-100 h-screen" : "opacity-0 h-0"
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
