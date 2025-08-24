"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black relative text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800/30 via-black to-green-900/30 pointer-events-none" />

      {/* Wrapper */}
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-sm tracking-wide text-green-400">Contact Us</p>
          <h1 className="text-4xl font-bold">Get in Touch with Us</h1>
          <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
            We’re here to help. Whether you’re interested in learning more about our services 
            or need support, we’re happy to assist you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-900/70 rounded-2xl p-10 shadow-xl">
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
              <p>
                Phone: <span className="text-white">+1-415-555-0199</span>
              </p>
              <p>
                Email: <span className="text-white">contact@innovatech.com</span>
              </p>
              <p>
                Location: Future Tech Institute, 123 Innovation Way, Suite 200 <br />
                San Francisco, CA 94107
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
