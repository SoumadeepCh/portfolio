'use client'
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}
