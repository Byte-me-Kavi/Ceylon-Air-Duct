import SiteNav from "./components/SiteNav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import GrillsLine from "./components/sections/GrillsLine";
import Projects from "./components/sections/Projects";
import Anniversary from "./components/sections/Anniversary";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Products />
        <GrillsLine />
        <Projects />
        <Anniversary />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
