"use client";
import { useState, useEffect } from "react";
import ContactPage from "./ContactUs";
import Footer from "./Footer";
import { WavyBackground } from "./ui/wavy-background";
import { motion } from "framer-motion";
import ServicesPage from "./ServicesPage";
import ProductsCarousel from "./ProductsCarousel";
import ValuesPage from "./ValuesPage";
import GoalsPage from "./GoalsPage";
import WelcomePage from "./WelcomePage";
import CustomNavbar from "./CustomNav";

export function NavPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="relative w-full min-h-screen overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
      </div>

      {/* Navbar with scroll effect */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          }`}
      >
        <CustomNavbar/>
      </motion.div>
      <BackgroudBeam />
      <WelcomePage />
      <GoalsPage />
      <ValuesPage />
      <ProductsCarousel />
      <ServicesPage />
      <AboutUs />
      <ContactPage />
      <Footer />
    </div>
  );
}

const AboutUs = () => {
  return <></>;
};

const BackgroudBeam = () => {
  return (
    <div className="relative h-full">
      <WavyBackground>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold inter-var text-center">
            <span className="bg-clip-text ">
              Illusion AI
            </span>{" "}
            <br />
            <motion.span
              className="text-xl md:text-2xl lg:text-3xl font-light mt-4 block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-purple-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Deeptech that simplifies complexity
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg mt-6 text-white/80 font-normal inter-var text-center max-w-3xl mx-auto leading-relaxed"
          >
           AI that can read your future, solve your business problems, and teach you the secrets of the
           universe, help you to research and automate the task all in one place.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg"
            >
              <a href="#services">Explore Services and Products</a>
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/10 text-white backdrop-blur-sm rounded-lg font-medium border border-white/20"
            >
              View Demo
            </motion.button> */}
          </motion.div>
        </motion.div>
      </WavyBackground>
    </div>
  );
};

// Add this to your global CSS
// Add these to your global CSS or use a style tag
const styles = `
@keyframes pulse-slow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.3; }
}
.animate-pulse-slow {
  animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
`;

// Don't forget to inject the styles
// You can use a style tag in your document head or add to your CSS file
