"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNav";
import { useState } from "react";

const solutions = [
  "Custom / personalized websites, landing pages development.",
  "Web components and web related projects for SMB.",
  "Responsive design and optimization design of wireframe UI/UX.",
  "Contract base web projects.",
];
interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  date: string;
}
const projects: Project[] = [
  {
    title: "ShipLink – Smart, Competitive & Flexible Shipping Platform",
    description:
      "ShipLink is a modern shipping and logistics platform that bridges the gap between people who need to ship products and shippers looking for delivery jobs.",
    link: "https://shiplink.onrender.com/",
    image: "/shiplink.png",
    date: "April 2, 2025",
  },
  {
    title: "TailTenders - AI-Powered Personal Stylist",
    description:
      "Developed a smart fashion recommendation platform using AI to provide personalized outfit suggestions.",
    link: "https://trialtailtender-xiab-one.vercel.app/",
    image: "/tailtenders.png",
    date: "Feb 22, 2025",
  },
  {
    title: "CodeBuddy - Developer Social Media",
    description:
      "Built a full-stack social platform for developers with real-time chat functionality.",
    link: "https://codebuddy-gamma.vercel.app",
    image: "/codebuddy.png",
    date: "Aug 2022",
  },
  {
    title: "CryptoTracker App",
    description:
      "Developed a responsive cryptocurrency tracking application with real-time updates.",
    link: "https://crypto-app1-seven.vercel.app",
    image: "/cryptostuff.png",
    date: "May 2022",
  },
  {
    title: "Job Portal Application",
    description:
      "Secure authentication, job posting, application tracking, and advanced search filters.",
    link: "https://mernjobportal-2-1cwi.onrender.com",
    image: "/jobportal.png",
    date: "Dec 2021",
  },
  {
    title: "CopyTail",
    description: "Copy Tail COmponents.",
    link: "https://copytail.vercel.app/",
    image: "/copytail.png",
    date: "Feb 2023",
  },
  {
    title: "ShipSnap",
    description: "Track Your Packages Like Never Before",
    link: "https://ship-snap-track.vercel.app/",
    image: "/shipsnap.png",
    date: "Feb 2023",
  },
  {
    title: "Footique",
    description: "Your Virtual FootWear web app.",
    link: "https://footify-commerce-133cddb3-j686.vercel.app/",
    image: "/footique.png",
    date: "Feb 2023",
  },
  ,
  {
    title: "WeatherWear",
    description:
      "our Ultimate Travel Companion and Style Guide,Weather-Based Outfit Suggestion.",
    link: "https://weatherwear-orcin.vercel.app/",
    image: "/weatherwear.png",
    date: "Apr 2023",
  },
  {
    title: "LearnNova",
    description:
      " simplify and enhance web user life through powerful tools tailored for academic and personal development..",
    link: "https://learnnova-9fgg.vercel.app",
    image: "/learnnova.png",
    date: "Jun 2023",
  },
  {
    title: "Thumbnail Board Center",
    description:
      " a platform designed to simplify the creation and management of image thumbnails for websites, social media, and other digital content.",
    link: "https://thumbnail-hub-lemg.vercel.app",
    image: "/thumbnailboard.png",
    date: "Jul 2023",
  },
];

export default function WebSolution() {
  const [isExpanded, setIsExpanded] = useState(false);
  const projectsToShow = isExpanded ? projects : projects.slice(0, 6); // Show first 6 projects by default

  const handleToggleProjects = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      <CustomNavbar />

      {/* Web Solutions Section */}
      <section className="relative w-full py-16 px-6 lg:px-20 overflow-hidden">
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
              Empowering SMBs and enterprises with modern, responsive, and
              scalable web solutions.
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

      {/* Projects Showcase Section */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Our Web Development Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gray-800/50 border border-gray-700 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm text-gray-400">
                        {project.date}
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-sm font-medium hover:from-purple-600 hover:to-blue-600 transition-colors"
                      >
                        View Live
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {projects.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={handleToggleProjects}
                className="px-6 py-3 bg-transparent border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/10 transition-colors"
              >
                {isExpanded ? "Show Less Projects" : "View More Projects"}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
