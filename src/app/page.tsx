"use client";

import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false });
const AuroraBackground = dynamic(() => import("@/components/AuroraBackground"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Education = dynamic(() => import("@/components/Education"), { ssr: false });
const Certificates = dynamic(() => import("@/components/Certificates"), { ssr: false });
const WireConnectionGame = dynamic(() => import("@/components/WireConnectionGame"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      <AuroraBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certificates />
        <WireConnectionGame />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}