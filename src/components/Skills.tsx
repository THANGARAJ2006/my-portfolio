"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiCpu, FiZap, FiPenTool, FiDatabase } from "react-icons/fi";

const skills = [
  { name: "Python", icon: FiCode, level: 75, description: "Scripting, automation & data analysis" },
  { name: "C Programming", icon: FiCpu, level: 65, description: "Embedded systems & low-level programming" },
  { name: "AutoCAD", icon: FiPenTool, level: 80, description: "2D drafting & 3D modeling" },
  { name: "MATLAB", icon: FiDatabase, level: 70, description: "Signal processing & simulations" },
  { name: "Electronics", icon: FiZap, level: 85, description: "Circuit design & embedded systems" },
];

function SkillCard({ skill, index, inView }: { skill: (typeof skills)[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="glass rounded-2xl p-6 glow-on-hover shine-effect group relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 bg-white/5 group-hover:bg-white/10">
            <skill.icon size={24} className="text-white/50 group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="text-white font-semibold">{skill.name}</h3>
            <p className="text-white/30 text-xs">{skill.description}</p>
          </div>
        </div>

        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.15, ease: "easeOut" }}
            className="h-full rounded-full bg-white/70"
            style={{ boxShadow: "0 0 8px rgba(255, 255, 255, 0.2)" }}
          />
        </div>
        <p className="text-right text-xs text-white/20 mt-1">{skill.level}%</p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-white/30 tracking-[0.3em] uppercase mb-3">
            My expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}