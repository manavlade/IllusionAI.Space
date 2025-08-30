"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, ShieldCheck, Award } from "lucide-react";

const values = [
  {
    title: "Innovation First",
    desc: "Pushing the boundaries of AI & automation",
    icon: Lightbulb,
    color: "from-green-400 to-purple-400",
    glow: "shadow-green-500/40",
  },
  {
    title: "Human-Centric AI",
    desc: "Building AI that augments people, not replaces them",
    icon: Users,
    color: "from-purple-400 to-green-400",
    glow: "shadow-purple-500/40",
  },
  {
    title: "Trust & Transparency",
    desc: "Ethical and explainable AI systems",
    icon: ShieldCheck,
    color: "from-green-400 to-blue-400",
    glow: "shadow-blue-500/40",
  },
  {
    title: "Excellence",
    desc: "High-quality, production-ready solutions",
    icon: Award,
    color: "from-purple-400 to-pink-400",
    glow: "shadow-pink-500/40",
  },
];

export default function ValuesPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-green-600/20 rounded-full blur-[200px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[200px] animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-32 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-purple-400">
            Our Values
          </h1>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At <span className="text-green-400 font-semibold">Illusion AI</span>
            , our values guide every solution we create — blending
            <span className="text-purple-400"> innovation</span>,
            <span className="text-green-400"> ethics</span>, and
            <span className="text-white"> human empowerment</span>.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="relative flex items-center justify-center">
          {/* Central Image */}
          <div className="relative z-10 w-[620px] h-[400px]">
            <img
              src="./valuesekelton.png"
              alt="Illusion AI Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Neon circuit lines (SVG layer) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left upper line */}
            <motion.path
              d="M 50% 50% L 20% 35%"
              stroke="url(#neonBlue)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
            />
            {/* Left lower line */}
            <motion.path
              d="M 50% 50% L 20% 65%"
              stroke="url(#neonBlue)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
            />
            {/* Right upper line */}
            <motion.path
              d="M 50% 50% L 80% 35%"
              stroke="url(#neonPink)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.9 }}
            />
            {/* Right lower line */}
            <motion.path
              d="M 50% 50% L 80% 65%"
              stroke="url(#neonPink)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            />

            {/* Neon gradients */}
            <defs>
              <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00faff" />
                <stop offset="100%" stopColor="#007bff" />
              </linearGradient>
              <linearGradient id="neonPink" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff00ff" />
                <stop offset="100%" stopColor="#ff66cc" />
              </linearGradient>
            </defs>
          </svg>

          {/* Left side values */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-44 z-30">
            {values.slice(0, 2).map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  className={`relative drop-shadow-[0_0_40px_rgba(0,150,255,0.7)]
 bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-80 shadow-lg hover:${val.glow} transition duration-300`}
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${val.color} flex items-center justify-center`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{val.title}</h3>
                      <p className="text-neutral-300 text-sm">{val.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right side values */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-44 z-30">
            {values.slice(2).map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  className={`relative drop-shadow-[0_0_40px_rgba(0,0,255,0.7)]
 bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-80 shadow-lg hover:${val.glow} transition duration-300`}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${val.color} flex items-center justify-center`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{val.title}</h3>
                      <p className="text-neutral-300 text-sm">{val.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
