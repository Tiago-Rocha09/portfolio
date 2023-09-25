import { Dictionary } from "@/types/global";

export const Summary = ({ dictionary }: Dictionary) => {
  const aboutDictionary = dictionary?.about || null;

  return (
    <section className="bg-gray-750 w-full relative">
      <ul className="relative sm:absolute sm:-bottom-16 text-white block sm:grid grid-cols-2 p-5 left-1/2 -translate-x-1/2 bg-transparent sm:bg-gray-850 sm:rounded-[60px]">
        <li className="p-8 text-center sm:border-r sm:border-r-white">
          <p className="text-4xl font-bold mb-2">
            {aboutDictionary?.yearsExperience || ""}
          </p>
          <p className="text-sm">
            {aboutDictionary?.yearsExperienceText || ""}
          </p>
        </li>
        <li className="p-8 text-center">
          <p className="text-4xl font-bold mb-2">
            {aboutDictionary?.projects || ""}
          </p>
          <p className="text-sm">{aboutDictionary?.projectsText || ""}</p>
        </li>
      </ul>
    </section>
  );
};
