"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Navbar Component
 * 
 * The main navigation bar for MorleyAI.
 * Features:
 * - Glassmorphism effect on scroll
 * - Responsive mobile menu
 * - Animated brand logo
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/#projects" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Cpu className="w-8 h-8 text-blue-500 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-0 blur-lg bg-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            MORLEY<span className="text-blue-500">AI</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/dashboard" className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-center">
            Client Portal
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-300"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-center">
            Client Portal
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
