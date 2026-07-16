"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiSend, FiCheck, FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const socials = [
    { icon: FiGithub, href: "https://github.com/", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: FiInstagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: FiMail, href: "mailto:thangaraj@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-white/30 tracking-[0.3em] uppercase mb-3">Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 space-y-5 relative overflow-hidden"
          >
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">Name</label>
              <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">Email</label>
              <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">Message</label>
              <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 resize-none" placeholder="Your message..." />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                background: sent ? "#22c55e" : "#ffffff",
                color: "#000000",
              }}
            >
              {sent ? (
                <><FiCheck size={16} /> Sent Successfully!</>
              ) : (
                <><FiSend size={16} /> Send Message</>
              )}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <p className="text-white/30 text-sm leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/40 hover:bg-white/10 text-white/40 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}