import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}

export default Home;
