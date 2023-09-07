import { ProgressItemList } from "@/components/progressItemList";

export const Skills = () => {
  return (
    <section id="skills" className="bg-gray-750 sm:bg-gray-850 w-full">
      <section className="container mt-28 mb-20">
        <header className="mb-12 text-center text-white sm:w-2/3 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Linguagens de programação e Frameworks
          </h2>
          <p className="text-gray-350 text-sm sm:text-[16px]">
            React e Node são as tecnologias que mais utilizo no meu dia a dia,
            mas tenho experiência com diversas outras...
          </p>
        </header>
        <ul className="block sm:grid sm:grid-cols-2">
          <ProgressItemList
            value={7}
            max={7}
            skill="Javascript"
            label="7 anos"
          />
          <ProgressItemList value={7} max={7} skill="HTML" label="7 anos" />
          <ProgressItemList value={7} max={7} skill="CSS" label="7 anos" />
          <ProgressItemList value={7} max={7} skill="SQL" label="7 anos" />
          <ProgressItemList value={7} max={7} skill="PHP" label="7 anos" />
          <ProgressItemList value={5} max={7} skill="React Js" label="5 anos" />
          <ProgressItemList value={3} max={7} skill="Next.js" label="3 anos" />
          <ProgressItemList value={3} max={7} skill="Node.js" label="3 anos" />
          <ProgressItemList
            value={2}
            max={7}
            skill="TypeScript"
            label="2 anos"
          />
          <ProgressItemList
            value={2}
            max={7}
            skill="React Native"
            label="2 anos"
          />
        </ul>
      </section>
    </section>
  );
};
