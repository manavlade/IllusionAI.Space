"use client";

import {motion} from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BackgroundBeams } from './ui/background-beams';
export default function Footer() {

  const router = useRouter();
  return (
    <main className="flex flex-col min-h-screen text-white bg-black">
      <section className="w-full flex justify-center -mt-10 z-10 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-gradient opacity-40 blur-3xl" />

      <div className="w-full max-w-[90%] bg-gradient-to-br from-black via-neutral-900 to-black rounded-2xl text-white shadow-2xl flex flex-col md:flex-row justify-between items-center px-10 py-16 relative overflow-hidden border border-neutral-800 backdrop-blur-md">
        
        {/* Floating Glow Circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />

        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col gap-4 relative z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Illusion AI
          </h3>
          <p className="text-neutral-300 text-lg leading-relaxed max-w-xl">
            Deeptech that simplifies complexity.
            <br />
            AI that can read your future, solve your business problems, teach you universal secrets, research, and automate tasks — all in one place.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg"
            >
              <a href="/#contact">Get Started</a>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Globe Image with floating animation */}
        <motion.div 
          className="flex-1 flex justify-end items-center mt-10 md:mt-0 relative z-10"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
              alt="globe"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border border-neutral-700 opacity-90"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            />
            {/* Glow behind globe */}
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient Animation Keyframes */}
      <style jsx>{`
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-0 py-14 px-6">
        <div className="max-w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          {/* Company info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold">Illusion AI</h3>
       
            <p>Mumbai, Maharashtra</p>
            <p>India</p>
            <p className="mt-2">Phone number: <span className="font-medium">9766675853</span></p>
            <p>Email: <span className="font-medium">infoillusionai@gmail.com</span></p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Quick links</h4>
            <a href="/" className="hover:text-neutral-300">Home</a>
            <a href="/#about" className="hover:text-neutral-300">About Us</a>
            <a href="/#services" className="hover:text-neutral-300">Services</a>
            <a href="/#products" className="hover:text-neutral-300">Products</a>
            <a href="/#contact" className="hover:text-neutral-300">Contact us</a>
          </div>
          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Legal</h4>
            <a href="/termsandcondition" className="hover:text-neutral-300">Terms of service</a>
            <a href="/privacypolicy" className="hover:text-neutral-300">Privacy policy</a>
            <a href="/cookiepolicy" className="hover:text-neutral-300">Cookie policy</a>
          </div>

          <div className=' flex flex-row gap-5'>
            <a href="#" className="hover:text-neutral-300"><Facebook /></a>
            <a href="#" className="hover:text-neutral-300"><Instagram /></a>
            <a href="#" className="hover:text-neutral-300"><Linkedin /></a>
            <a href="#" className="hover:text-neutral-300"><Twitter /></a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 text-neutral-500 text-xs">
          © 2025 Illusion AI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
