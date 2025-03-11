import About from "@/components/ui/molecules/about";
import Contact from "@/components/ui/molecules/contact";
import Experience from "@/components/ui/molecules/experience";
import Hero from "@/components/ui/molecules/hero";
import Projects from "@/components/ui/molecules/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
