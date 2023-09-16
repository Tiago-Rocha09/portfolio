import { Navbar } from "@/components/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Home } from "@/components/sections/home";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Summary } from "@/components/summary";
import { getDictionary } from "./dictionaries";
import { DictionaryKeys } from "@/types/global";

interface HomePageProps {
  params: { lang: DictionaryKeys };
}

export default async function HomePage(props: HomePageProps) {
  const { lang } = props.params;
  const dictionary = await getDictionary(lang); // en

  return (
    <>
      <Navbar dictionary={dictionary} language={lang} />
      <main className="flex min-h-screen flex-col items-center">
        <Home dictionary={dictionary} />
        <Summary dictionary={dictionary} />
        <About dictionary={dictionary} />
        <Skills dictionary={dictionary} />
        <Projects dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
    </>
  );
}
