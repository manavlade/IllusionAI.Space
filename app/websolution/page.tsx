"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNav";

const solutions = [
  "Custom / personalized websites, landing pages development.",
  "Web components and web related projects for SMB.",
  "Responsive design and optimization design of wireframe UI/UX.",
  "Contract base web projects.",
];

export default function WebSolution() {
  return (
    <div>
      <CustomNavbar />
    <section className="relative w-full py-16 px-6 lg:px-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/websolution.jpg"
            alt="Web Solution"
            width={500}
            height={400}
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Web Solutions
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Empowering SMBs and enterprises with modern, responsive, and scalable web solutions.
          </p>

          <div className="grid gap-6">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border border-gray-700 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition rounded-xl">
                  <CardContent className="p-5 text-gray-200 text-base md:text-lg">
                    {item}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    <Footer/>
    </div>
    );
}
