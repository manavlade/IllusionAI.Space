"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/illusion ai.jpg";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/#about" },
  { name: "Products", link: "/#products" },
  { name: "Services", link: "/#services" },
  { name: "Contact", link: "/#contact" },
];

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl shadow-lg border-b border-white/10">
      <div className="max-w-[90%] mx-auto px-6 py-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={60}
            className="rounded"
          />
          <span className="text-white font-bold text-3xl">Illusion AI</span>
        </div>

        {/* Middle: Navlinks (hidden on mobile + tab, shown only on lg and above) */}
        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-white/80 text-xl hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Get Started button (hidden until lg) */}
        <div className="hidden lg:block">
          <a href="#contact">
            <button className="px-5 py-2 text-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:opacity-90 transition">
              Get Started
            </button>
          </a>
        </div>

        {/* Mobile/Tablet Menu Button (shown below lg) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="bg-gray-800 text-white">
            <div className="flex flex-col lg:hidden items-center py-4 gap-8">
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
            <div className="flex justify-center py-4">
              <a href="#contact">
                <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:opacity-90 transition">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </>
      )}

    </nav>
  );
}
