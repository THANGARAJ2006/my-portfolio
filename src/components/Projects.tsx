"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  { title: "IoT Weather Station", description: "IoT-based weather monitoring system using sensors to track temperature, humidity, and pressure in real-time.", tags: ["IoT", "Arduino", "Python"], github: "#", live: "#" },
  { title: "Signal Analyzer", description: "MATLAB-based signal analysis tool for processing and visualizing electronic communication signals.", tags: ["MATLAB", "DSP", "Signal Processing"], github: "#", live: "#" },
  { title: "Smart Home Automation", description: "Home automation system using embedded controllers and mobile app interface for remote monitoring.", tags: ["Embedded", "C", "IoT"], github: "#", live: "#" },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-white/30 tracking-[0.3em] uppercase mb-3">My work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass rounded-2xl overflow-hidden group glow-on-hover shine-effect relative"
            >
              <div className="h-48 relative overflow-hidden bg-white/[0.02]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-3xl font-bold text-white/10">{project.title[0]}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/80 transition-colors">{project.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-white/10 hover:border-white/30 hover:text-white text-white/40 transition-all duration-300 hover:scale-105">
                    <FiGithub size={14} />
                    GitHub
                  </a>
                  <a href={project.live} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105">
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}