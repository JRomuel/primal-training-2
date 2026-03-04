"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-primal-2.png"
            alt="Primal"
            width={40}
            height={40}
            className="h-8 md:h-10 w-auto"
          />
          <span className="font-heading font-bold text-[22px] md:text-[25px] tracking-tight">
            PRIMAL TRAINING
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[15px] text-black hover:text-purple transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className="bg-purple text-black font-heading font-bold text-[15px] px-5 py-2.5 border border-black hover:bg-purple/80 transition-colors"
          >
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-black bg-white">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-5 py-3 font-sans text-[15px] border-b border-black/10 hover:bg-lavender transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="p-5">
            <a
              href="#join"
              className="block text-center bg-purple text-black font-heading font-bold text-[15px] px-5 py-2.5 border border-black"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
