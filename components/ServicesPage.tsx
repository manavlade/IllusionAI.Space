"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Code, 
  Brain, 
  BarChart3, 
  Cloud, 
  Shield, 
  Smartphone,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const services = [
    {
      id: 1,
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs with cutting-edge machine learning algorithms.",
      icon: <Brain className="w-8 h-8" />,
      features: ["Machine Learning", "Neural Networks", "Predictive Analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Web Applications",
      description: "Modern, responsive web applications built with the latest technologies for optimal performance.",
      icon: <Code className="w-8 h-8" />,
      features: ["React/Next.js", "Responsive Design", "Progressive Web Apps"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with powerful visualization and analysis tools.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Data Visualization", "Business Intelligence", "Custom Dashboards"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for businesses of all sizes.",
      icon: <Cloud className="w-8 h-8" />,
      features: ["AWS/Azure/GCP", "Serverless Architecture", "Cloud Migration"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security assessments and solutions.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Security Audits", "Threat Prevention", "Compliance"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["iOS & Android", "React Native", "Native Performance"],
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-900 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center mb-6"
        >
          <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
            Our Services
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Solutions That
          </span>{" "}
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Drive Innovation
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"
        />
        
        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          We offer cutting-edge services designed to transform your business and keep you ahead of the competition.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <AnimatePresence>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 p-6 group"
            >
              {/* Hover effect background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${service.color}`}
                initial={false}
                animate={{ opacity: hoveredService === service.id ? 0.1 : 0 }}
              />
              
              {/* Icon */}
              <motion.div 
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-r ${service.color} text-white`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              
              {/* Description */}
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center text-sm text-gray-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <motion.button 
                className={`flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                whileHover={{ x: 5 }}
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Ready to transform your business?
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-purple-500/20 transition-all"
        >
          Get Started Today
        </motion.button>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-purple-500 opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 right-12 w-3 h-3 rounded-full bg-blue-500 opacity-20"
      />
    </div>
  );
};

export default ServicesPage;