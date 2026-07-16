"use client";

import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Education = dynamic(() => import("@/components/Education"), { ssr: false });
const Internship = dynamic(() => import("@/components/Internship"), { ssr: false });
const Certificates = dynamic(() => import("@/components/Certificates"), { ssr: false });
const Workshops = dynamic(() => import("@/components/Workshops"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/BackToTop"), { ssr: false });

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Particles />
      <div className="aurora-bg" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Internship />
          <Certificates />
          <Workshops />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
