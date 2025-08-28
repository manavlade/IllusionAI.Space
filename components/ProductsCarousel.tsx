"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams"; // 🔥 beams import

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const products = [
    // {
    //   title: "MINDVERSE AI",
    //   subtitle: "Where Consciousness Meets Computation",
    //   description:
    //     "Turning complex realities into intelligent, intuitive solutions. Multi-domain chatbot ecosystems- neurology, psychology, philosophy, astrophysics, spirituality and cosmic intelligence Quantum AI.",
    //   cta: "Explore MINDVERSE AI",
    //   color: "from-purple-600 to-blue-600",
    //   image: "/mindverse.jpg", // ✅ add later
    // },
    {
      title: "Astro AI",
      subtitle: "AI-driven astrology & numerology engine",
      description:
        "Unlock the mathematical patterns of the universe through AI that combines astrological wisdom with numerological analysis. Cosmic Num AI reveals how celestial movements and numerical frequencies influence personal and business outcomes.",
      cta: "Explore Astro AI",
      color: "from-blue-600 to-indigo-600",
      image: "/astro.jpg", // ✅ you already have astro.jpg
    },
    {
      title: "Mind Neuro AI",
      subtitle: "Intersection of neurology, psychology & philosophy",
      description:
        "Explore the depths of human consciousness through AI that understands the brain, mind, and soul. Mind Neuro AI provides insights into behavior patterns, cognitive optimization, and philosophical understanding of human experience.",
      cta: "Explore Mind Neuro AI",
      color: "from-green-600 to-teal-600",
      image: "/mindneuro.jpg", // ✅ placeholder
    },
    {
      title: "Divine Script AI",
      subtitle: "Spiritual guidance interpretation",
      description:
        "DivineScript AI merges AI with the profound teachings of all major philosophies and sacred texts to provide guidance for daily life challenges.",
      cta: "Explore Divine Script AI",
      color: "from-amber-600 to-orange-600",
      image: "/divine.jpg", // ✅ placeholder
    },
    {
      title: "Cosmos AI",
      subtitle: "Advanced astrophysics & quantum AI assistant",
      description:
        "Harness the fundamental forces of reality through AI that understands both cosmic scales and quantum realms. Cosmos AI applies universal principles to solve complex problems across any domain.",
      cta: "Explore Cosmos AI",
      color: "from-indigo-600 to-purple-600",
      image: "/cosmos.jpg", // ✅ placeholder
    },
  ];

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  const navigateTo = (newIndex: number) => {
    if (newIndex > currentIndex) setDirection(1);
    else setDirection(-1);
    setCurrentIndex(newIndex);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div
      id="products"
      className="relative w-full min-h-screen bg-black text-white py-20 overflow-hidden"
    >
      {/* 🔥 Background beams + glow */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 opacity-20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-700 opacity-20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Products
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our cutting-edge AI solutions that bridge technology with
            human consciousness
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-950 via-black to-neutral-950 border border-gray-800 shadow-2xl h-96">
          {/* Slide */}
          <div className="relative h-full">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-8"
              >
                {/* Info */}
                <div className="flex-1 max-w-md space-y-6 z-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {products[currentIndex].title}
                    </h3>
                    <p className="text-purple-300 font-medium mb-4">
                      {products[currentIndex].subtitle}
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {products[currentIndex].description}
                  </p>

                  <button
                    className={`px-6 py-3 rounded-lg bg-gradient-to-r ${products[currentIndex].color} text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg`}
                  >
                    {products[currentIndex].cta}
                  </button>
                </div>

                {/* Visual with image */}
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                    <img
                      src={products[currentIndex].image}
                      alt={products[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-purple-500 w-8" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousel;
