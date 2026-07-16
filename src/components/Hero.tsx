"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import MagneticElement from "./MagneticElement";

const roles = [
  "Electronics Engineer",
  "Python Learner",
  "AutoCAD Enthusiast",
  "Problem Solver",
];

function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="gradient-text animate-text-glow">
      {text}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
}

function OrbitingRings() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${220 + i * 60}px`,
            height: `${220 + i * 60}px`,
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid rgba(255, 255, 255, ${0.05 - i * 0.01})`,
            }}
          />
          <div
            className={i % 2 === 0 ? "animate-orbit" : "animate-orbit-reverse"}
            style={{ position: "absolute", top: "50%", left: "50%", transformOrigin: "0 0" }}
          >
            <div
              className="rounded-full"
              style={{
                width: `${6 - i}px`,
                height: `${6 - i}px`,
                background: "#ffffff",
                boxShadow: `0 0 ${10 + i * 5}px rgba(255, 255, 255, 0.5)`,
                transform: `translateX(${110 + i * 30}px)`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-[120px] animate-pulse"
          style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-[120px] animate-pulse"
          style={{
            background: "radial-gradient(circle, #a3a3a3, transparent)",
            animationDelay: "1s",
          }}
        />
      </div>

      <OrbitingRings />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 2.2 }}
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 relative"
        >
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background: "conic-gradient(from 0deg, #ffffff, #525252, #a3a3a3, #ffffff)",
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text">
              T
            </div>
          </div>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
                animationDelay: `${i * 0.8}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-sm md:text-base text-white/40 tracking-[0.3em] uppercase mb-4"
        >
          Welcome to my world
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 2.6 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="gradient-text animate-text-glow">Thangaraj</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-light mb-8 h-12"
        >
          <TypingAnimation />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="text-white/30 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed"
        >
          Electronics and Communication Engineering student passionate about
          technology, software development, and building innovative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.1 }}
          className="flex items-center justify-center gap-8 mb-10"
        >
          {[
            { value: 5, suffix: "+", label: "Projects" },
            { value: 4, suffix: "+", label: "Certificates" },
            { value: 8, suffix: ".5", label: "CGPA" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-white/25 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <MagneticElement strength={0.2}>
            <a
              href="#projects"
              className="glow-on-hover px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 inline-block bg-white text-black"
            >
              View Projects
            </a>
          </MagneticElement>
          <MagneticElement strength={0.2}>
            <a
              href="#contact"
              className="glow-on-hover px-8 py-3 rounded-full font-medium text-sm border border-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 inline-block text-white"
            >
              Contact Me
            </a>
          </MagneticElement>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          {[
            { icon: FiGithub, href: "https://github.com/", label: "GitHub" },
            { icon: FiLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <MagneticElement key={label} strength={0.4}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full border border-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-white/40 hover:text-white inline-block"
              >
                <Icon size={18} />
              </a>
            </MagneticElement>
          ))}
          <MagneticElement strength={0.4}>
            <a
              href="mailto:thangaraj@example.com"
              aria-label="Email"
              className="p-3 rounded-full border border-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-white/40 hover:text-white inline-block"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </MagneticElement>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}