"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams"; // ✅ beams import

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
    <main className="relative bg-black text-white overflow-hidden py-30">
      {/* 🔥 Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-green-600/20 rounded-full blur-[200px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[200px] animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-24 space-y-6"
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

        {/* Layout */}
        <div className="relative flex items-center justify-center">
          {/* Central Image */}
          <div className="relative z-10 w-[620px] h-[450px]">
            <img
              src="/illusion-logo.png"
              alt="Illusion AI Neon Center"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Left side goals */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-10">
            {goals.slice(0, 3).map((goal, i) => (
              <motion.div
                key={i}
                className="relative group  bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg w-80 hover:shadow-green-500/20"
                initial={{ opacity: 0, x: -80 }}
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
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-20 z-10">
            {goals.slice(3).map((goal, i) => (
              <motion.div
                key={i}
                className="relative group bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg w-80 hover:shadow-purple-500/20"
                initial={{ opacity: 0, x: 80 }}
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
    </main>
  );
}
