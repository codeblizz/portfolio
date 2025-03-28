import Skills from "@/components/ui/organisms/skills";
import Header from "@/components/ui/molecules/header";
import Footer from "@/components/ui/molecules/footer";
import Contact from "@/components/ui/organisms/contact";
import Profile from "@/components/ui/organisms/profile";
import Greeting from "@/components/ui/organisms/intro";
import { StyleProvider } from "@/contexts/styleContext";
import Projects from "@/components/ui/organisms/projects";
import Education from "@/components/ui/organisms/education";
import Experience from "@/components/ui/organisms/experience";
import ScrollTop from "@/components/ui/organisms/scrollTopButton";
import StackProgress from "@/components/ui/organisms/skillProgress";
import StartupProject from "@/components/ui/organisms/startupProjects";

export default function Home() {
  return (
    <StyleProvider>
      <Header />
      <Greeting />
      <Skills />
      <StackProgress />
      <Education />
      <Experience />
      <Projects />
      <StartupProject />
      <Profile />
      <Contact />
      <ScrollTop />
      <Footer /> 
    </StyleProvider>
  );
}
