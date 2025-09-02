"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/illusion ai.jpg";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#about" },
  { name: "Products", link: "#products" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-white font-bold text-xl">Illusion AI</span>
        </div>

        {/* Middle: Navlinks (hidden on mobile + tab, shown only on lg and above) */}
        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Get Started button (hidden until lg) */}
        <div className="hidden lg:block">
          <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Mobile/Tablet Menu Button (shown below lg) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile/Tablet Nav Slide-in */}
    
<AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}   // stronger dim effect
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black " // higher than navbar
      />

      {/* Slide-in Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-72 bg-[#0a0a0a] shadow-2xl z-[100] p-6 flex flex-col"
      >
        <button
          className="self-end text-white mb-6"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-white/90 hover:text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="mt-6 px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </nav>
  );
}
