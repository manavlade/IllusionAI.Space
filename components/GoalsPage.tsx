"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const goals = [
  "Build scalable AI ecosystems tailored to industries",
  "Deliver production-grade AI automation systems for businesses",
  "Build intelligent chatbots & AI agents with human-like reasoning",
  "Explore conversational AI applications in neurology, psychology, philosophy, astrophysics, spirituality and Quantum AI",
  "Make AI accessible to enterprises, startups, and individuals",
  "Democratize AI with tools that are affordable, accessible, and adaptable",
];

export default function GoalsPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-green-600/20 rounded-full blur-[200px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[200px] animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-44 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-purple-400">
            Our Goals
          </h1>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At <span className="text-green-400 font-semibold">Illusion AI</span>
            , our goals reflect our mission to build AI ecosystems that bridge{" "}
            <span className="text-purple-400 font-semibold">technology</span>{" "}
            and{" "}
            <span className="text-green-400 font-semibold">
              human imagination
            </span>
            .
          </p>
        </motion.div>

        {/* Chakra Layout */}
        <div className="relative flex items-center justify-center">
          {/* SVG Neon Lines Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left side neon lines */}
            <line
              x1="50%"
              y1="50%"
              x2="15%"
              y2="35%"
              className="neon-line"
            />
            <line
              x1="50%"
              y1="50%"
              x2="15%"
              y2="50%"
              className="neon-line"
            />
            <line
              x1="50%"
              y1="50%"
              x2="15%"
              y2="65%"
              className="neon-line"
            />

            {/* Right side neon lines */}
            <line
              x1="50%"
              y1="50%"
              x2="85%"
              y2="35%"
              className="neon-line"
            />
            <line
              x1="50%"
              y1="50%"
              x2="85%"
              y2="50%"
              className="neon-line"
            />
            <line
              x1="50%"
              y1="50%"
              x2="85%"
              y2="65%"
              className="neon-line"
            />
          </svg>

          {/* Central Chakra Circle */}
          <motion.div
            className="relative w-56 h-56 rounded-full bg-gradient-to-r from-green-500/30 to-purple-500/30 flex items-center justify-center border border-white/10 shadow-[0_0_40px_rgba(0,255,180,0.5)] overflow-hidden z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {/* Spinning dashed border */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-400/40 animate-spin-slow" />

            {/* Image inside circle */}
            <img
              src="https://customer-assets.emergentagent.com/job_deeptech-home/artifacts/0n5e6bes_image.png"
              alt="Illusion AI Goals"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Left side goals */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-10">
            {goals.slice(0, 3).map((goal, i) => (
              <motion.div
                key={i}
                className="relative group bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-lg w-80 hover:shadow-green-500/20"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-purple-500 flex items-center justify-center shadow-md"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles size={20} className="text-white" />
                  </motion.div>
                  <p className="text-neutral-200 text-base leading-relaxed">
                    {goal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side goals */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-10">
            {goals.slice(3).map((goal, i) => (
              <motion.div
                key={i}
                className="relative group bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-lg w-80 hover:shadow-purple-500/20"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-green-500 flex items-center justify-center shadow-md"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles size={20} className="text-white" />
                  </motion.div>
                  <p className="text-neutral-200 text-base leading-relaxed">
                    {goal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .neon-line {
          stroke: url(#neonGradient);
          stroke-width: 2;
          stroke-dasharray: 6 6;
          animation: dashFlow 4s linear infinite;
          filter: drop-shadow(0 0 6px rgba(0, 255, 200, 0.8));
        }

        @keyframes dashFlow {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>

      {/* Neon Gradient for Lines */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#00ffcc" offset="0%" />
            <stop stopColor="#a855f7" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
    </main>
  );
}
