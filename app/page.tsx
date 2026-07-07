import {
  Navbar,
  Hero,
  Experience,
  TechStack,
  About,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
