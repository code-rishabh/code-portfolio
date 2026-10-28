import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Numbers } from "@/components/Numbers";
import { Work } from "@/components/Work";
import { Journey } from "@/components/Journey";
import { Experience } from "@/components/Experience";
import { Marquee } from "@/components/Marquee";
import { Notes } from "@/components/Notes";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Numbers />
      <Work />
      <Journey />
      <Notes />
      <Experience />
      <Marquee />
      <About />
      <Contact />
    </>
  );
}
