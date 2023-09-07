import { ProgressItemList } from "@/components/progressItemList";
import { Dictionary } from "@/types/global";

export const Skills = ({ dictionary }: Dictionary) => {
  const skillsDictionary = dictionary?.skills || null;

  return (
    <section id="skills" className="bg-gray-750 sm:bg-gray-850 w-full">
      <section className="container mt-28 mb-20">
        <header className="mb-12 text-center text-white sm:w-2/3 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {skillsDictionary?.title || ""}
          </h2>
          <p className="text-gray-350 text-sm sm:text-[16px]">
            {skillsDictionary?.subtitle || ""}
          </p>
        </header>
        <ul className="block sm:grid sm:grid-cols-2">
          <ProgressItemList
            value={7}
            max={7}
            skill="Javascript"
            label={`7 ${skillsDictionary?.years || ""}`}
          />
          <ProgressItemList
            value={7}
            max={7}
            skill="HTML"
            label={`7 ${skillsDictionary?.years || ""}`}
          />
          <ProgressItemList
            value={7}
            max={7}
            skill="CSS"
            label={`7 ${skillsDictionary?.years || ""}`}
          />
          <ProgressItemList
            value={7}
            max={7}
            skill="SQL"
            label={`7 ${skillsDictionary?.years || ""}`}
          />
          <ProgressItemList
            value={7}
            max={7}
            skill="PHP"
            label={`7 ${skillsDictionary?.years || ""}`}
          />
          <ProgressItemList
            value={5}
            max={7}
            skill="React Js"
            label={`5 ${skillsDictionary?.years || ""}`}
          />
          <ProgressItemList
            value={3}
            max={7}
            skill="Next.js"
            label={`3 ${skillsDictionary?.years || ""}`}
          />
          <ProgressItemList
            value={3}
            max={7}
            skill="Node.js"
            label={`3 ${skillsDictionary?.years || ""}`}
          />
          <ProgressItemList
            value={2}
            max={7}
            skill="TypeScript"
            label={`2 ${skillsDictionary?.years || ""}`}
          />
          <ProgressItemList
            value={2}
            max={7}
            skill="React Native"
            label={`2 ${skillsDictionary?.years || ""}`}
          />
        </ul>
      </section>
    </section>
  );
};
