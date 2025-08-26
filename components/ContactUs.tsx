"use client";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactPage() {
  return (
    <main className=" bg-black py-4 relative text-white">

      <div className="absolute inset-0 bg-gradient-to-r from-green-800/30 via-black to-green-900/30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto ">

        <div className="text-center mb-16 relative overflow-hidden">
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.p
              className="uppercase pt-6 text-sm tracking-widest text-green-400 font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span
                animate={{
                  textShadow: ["0 0 5px rgba(74, 222, 128, 0.5)", "0 0 15px rgba(74, 222, 128, 0.8)", "0 0 5px rgba(74, 222, 128, 0.5)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Contact Us
              </motion.span>
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Get in Touch with Us
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"
            />

            <motion.p
              className="mt-3 text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed pb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              We're here to help. Whether you're interested in learning more about our services
              or need support, we're happy to assist you.
            </motion.p>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -left-4 w-3 h-3 rounded-full bg-green-400 opacity-60"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-2 -right-4 w-4 h-4 rounded-full bg-purple-400 opacity-60"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10 ">
          {/* Left column - Info */}
          <div className="flex flex-col gap-6">
            <ul className="space-y-4 text-neutral-300">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span> Reliable Delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span> Comprehensive Token & Digest
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span> Customizable Notifications
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span> Real-Time Updates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span> Seamless Integration
              </li>
            </ul>

            <div className="mt-8 text-neutral-400 text-sm leading-relaxed">
              <h3 className="text-white font-semibold text-lg mb-2">General Contact Info</h3>
              {/* <p>
                Phone: <span className="text-white">+1-415-555-0199</span>
              </p> */}
              <p>
                Email: <span className="text-white">contact@illusionai.space</span>
              </p>
              <p>
                Location: Mumbai, Maharashtra, 400001
              </p>
            </div>
          </div>

          {/* Right column - Form */}
          <form className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" className="bg-neutral-800 border-neutral-700" />
              <Input placeholder="Last Name" className="bg-neutral-800 border-neutral-700" />
            </div>

            {/* Email */}
            <Input type="email" placeholder="Email Address" className="bg-neutral-800 border-neutral-700" />

            {/* Company */}
            <Input placeholder="Company Name" className="bg-neutral-800 border-neutral-700" />

            {/* Select */}
            <Select>
              <SelectTrigger className="bg-neutral-800 border-neutral-700">
                <SelectValue placeholder="Which best describes you?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="business">Business Owner</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                <SelectItem value="enterprise">Other</SelectItem>
              </SelectContent>
            </Select>

            {/* Message */}
            <Textarea placeholder="Write your message..." className="bg-neutral-800 border-neutral-700" />

            {/* Agreement */}
            <div className="flex items-start gap-2">
              <Checkbox id="agree" />
              <label htmlFor="agree" className="text-sm text-neutral-400 leading-tight">
                I agree to Fireside <span className="underline cursor-pointer">Terms of Use</span>
                and <span className="underline cursor-pointer">Privacy Policy</span>
              </label>
            </div>

            {/* Submit */}
            <Button type="submit" className="bg-green-600 hover:bg-green-500 rounded-lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
