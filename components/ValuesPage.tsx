"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, ShieldCheck, Award } from "lucide-react";

const values = [
  {
    title: "Innovation First",
    desc: "Pushing the boundaries of AI & automation",
    icon: Lightbulb,
    color: "from-green-400 to-purple-400",
  },
  {
    title: "Human-Centric AI",
    desc: "Building AI that augments people, not replaces them",
    icon: Users,
    color: "from-purple-400 to-green-400",
  },
  {
    title: "Trust & Transparency",
    desc: "Ethical and explainable AI systems",
    icon: ShieldCheck,
    color: "from-green-400 to-blue-400",
  },
  {
    title: "Excellence",
    desc: "High-quality, production-ready solutions",
    icon: Award,
    color: "from-purple-400 to-pink-400",
  },
];

export default function ValuesPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20 pointer-events-none" />
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-green-600/30 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-purple-600/30 blur-[150px] rounded-full animate-pulse delay-1000" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-purple-400">
            Our Values
          </h1>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At <span className="text-green-400 font-semibold">Illusion AI</span>, 
            our values guide every solution we create — blending 
            <span className="text-purple-400"> innovation</span>, 
            <span className="text-green-400"> ethics</span>, and 
            <span className="text-white"> human empowerment</span>.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                className="relative group bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-green-500/20 transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition duration-500" />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${val.color} flex items-center justify-center mb-6`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                >
                  <Icon size={26} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {val.title}
                </h3>
                {/* Description */}
                <p className="text-neutral-300 text-base leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
