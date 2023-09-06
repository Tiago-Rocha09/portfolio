import { Navbar } from "@/components/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Home } from "@/components/sections/home";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Summary } from "@/components/summary";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        <Home />
        <Summary />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
