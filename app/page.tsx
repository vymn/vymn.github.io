import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Experiences from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Feedbacks from "@/components/main/Feedbacks";
import About from "@/components/main/About";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        {/* <Skills /> */}
        {/* <Encryption /> */}

        <Experiences />

        <Feedbacks />
      </div>
    </main>
  );
}
