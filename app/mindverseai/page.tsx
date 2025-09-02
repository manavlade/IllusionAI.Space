"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const mindversePoints = [
  "Multi-domain chatbot ecosystems – neurology, psychology, philosophy, astrophysics, spirituality, and cosmic intelligence.",
  "Quantum AI – bridging human consciousness and machine computation.",
  "Turning complex realities into intelligent, intuitive solutions.",
];

export default function MINDVERSE() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Cosmic Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-indigo-500/30 rounded-full blur-[140px] animate-pulse delay-200" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-[120px] animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            MINDVERSE AI
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 italic">
            "Where Consciousness Meets Computation"
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-10">
            Turning complex realities into intelligent, intuitive solutions.
          </p>

          <div className="grid gap-6">
            {mindversePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border border-gray-700 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 transition rounded-xl">
                  <CardContent className="p-5 text-gray-200 text-base md:text-lg">
                    {point}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/mindverse.jpg"
            alt="Mindverse AI"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
