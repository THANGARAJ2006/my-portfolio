"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCpu, FiZap } from "react-icons/fi";

const events = [
  {
    title: "Tech Hunt Workshop",
    type: "Workshop",
    description:
      "Participated in the Tech Hunt Workshop gaining insights into emerging technologies and their applications in engineering.",
    icon: FiCpu,
  },
  {
    title: "Smart India Hackathon",
    type: "Hackathon",
    description:
      "Active participant in the Smart India Hackathon, collaborating with teammates to develop innovative solutions for real-world problems.",
    icon: FiZap,
  },
];

export default function Workshops() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Activities</p>
          <h2 className="section-heading gradient-text">Workshops & Events</h2>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex items-start gap-6 group shine-effect"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <event.icon className="text-neon-blue" size={24} />
              </motion.div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-poppins font-semibold text-white group-hover:text-neon-blue transition-colors">
                    {event.title}
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] font-sora uppercase tracking-wider rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                    {event.type}
                  </span>
                </div>
                <p className="text-sm text-white/40 font-inter leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
