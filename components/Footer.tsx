"use client";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <main className="flex flex-col min-h-screen text-white bg-black">
      {/* Newsletter */}
      <section className="w-full flex justify-center py-20 px-4">
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Subscribe to our newsletter
          </h2>
          <p className="mt-2 text-neutral-600">
            Sign up today and get a free sample up to 100 records.
          </p>

          {/* Input + button */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full max-w-md px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button className="rounded-xl font-semibold px-6">
              Get started
            </Button>
          </div>

          {/* Experts avatars */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-500">
            <span>Our experts are ready to help!</span>
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero CTA */}
      <section className="w-full flex justify-center px-6 -mt-10 z-10">
        <div className="w-full max-w-6xl bg-gradient-to-br from-black via-neutral-900 to-black rounded-2xl text-white shadow-lg flex flex-col md:flex-row justify-between items-center px-10 py-16 relative overflow-hidden">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Experience superior <br /> skip tracing
            </h3>
            <p className="text-neutral-300">150+ data points per search.</p>
            <Button className="mt-4 bg-white text-black rounded-xl w-fit px-6">
              Get started
            </Button>
          </div>

          {/* Right globe image */}
          <div className="flex-1 flex justify-end items-center mt-10 md:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
              alt="globe"
              className="w-64 h-64 object-cover rounded-full opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-0 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Company info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold">skipmatrix</h3>
            <p>20619 Torrence Chapel Rd</p>
            <p>Suite 116 #1040</p>
            <p>Cornelius, NC 28031</p>
            <p>United States</p>
            <p className="mt-2">Phone number: <span className="font-medium">1-800-201-1019</span></p>
            <p>Email: <span className="font-medium">support@skipmatrix.com</span></p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Quick links</h4>
            <a href="#" className="hover:text-neutral-300">Pricing</a>
            <a href="#" className="hover:text-neutral-300">Resources</a>
            <a href="#" className="hover:text-neutral-300">About us</a>
            <a href="#" className="hover:text-neutral-300">FAQ</a>
            <a href="#" className="hover:text-neutral-300">Contact us</a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Social</h4>
            <a href="#" className="hover:text-neutral-300">Facebook</a>
            <a href="#" className="hover:text-neutral-300">Instagram</a>
            <a href="#" className="hover:text-neutral-300">LinkedIn</a>
            <a href="#" className="hover:text-neutral-300">Twitter</a>
            <a href="#" className="hover:text-neutral-300">YouTube</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Legal</h4>
            <a href="#" className="hover:text-neutral-300">Terms of service</a>
            <a href="#" className="hover:text-neutral-300">Privacy policy</a>
            <a href="#" className="hover:text-neutral-300">Cookie policy</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 text-neutral-500 text-xs">
          © 2024 Skipmatrix. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
