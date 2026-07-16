"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiZap, FiCode, FiCpu, FiBookOpen } from "react-icons/fi";

const highlights = [
  { icon: FiCpu, label: "Electronics" },
  { icon: FiCode, label: "Python" },
  { icon: FiZap, label: "AutoCAD" },
  { icon: FiBookOpen, label: "Quick Learner" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-white/30 tracking-[0.3em] uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden glow-on-hover">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-5"
                style={{ background: "#ffffff" }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-[80px] opacity-3"
                style={{ background: "#a3a3a3" }}
              />

              <h3 className="text-2xl font-bold text-white mb-4">Thangaraj</h3>
              <p className="text-white/50 text-sm font-medium mb-4">
                B.E. Electronics & Communication Engineering
              </p>
              <p className="text-white/35 leading-relaxed mb-6">
                I&apos;m a passionate Electronics and Communication Engineering
                student with a deep interest in technology and its real-world
                applications. I love exploring the intersection of hardware and
                software, from circuit design to Python programming and AutoCAD
                drafting.
              </p>
              <p className="text-white/35 leading-relaxed">
                As a quick learner and hardworking individual, I constantly seek
                opportunities to expand my skill set. I believe in continuous
                learning and am always eager to take on new challenges in both
                the electronics and software domains.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center glow-on-hover shine-effect group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 bg-white/5 group-hover:bg-white/10">
                  <item.icon size={22} className="text-white/60 group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-white/50">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}