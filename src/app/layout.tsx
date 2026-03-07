import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "MorleyAI | Engineering Africa's Intelligence",
  description: "Next-generation Python engineering agency based in Zambia. High-speed AI development with local resilience and high-performance mission-critical systems.",
  keywords: ["AI Zambia", "Python Engineering Lusaka", "Data Protection Act Zambia", "MorleyAI", "Zambian Tech", "AuraStream"],
};

/**
 * RootLayout
 * 
 * The main wrapper for the entire application.
 * - Imports global fonts (Inter & Orbitron)
 * - Sets up the global mesh gradient background
 * - Includes the sticky Navbar and standard Footer
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} antialiased min-h-screen bg-mesh`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <footer className="py-12 border-t border-white/5 glass">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="text-xl font-bold text-white mb-4 block">MORLEY<span className="text-blue-500">AI</span></span>
              <p className="text-slate-400 text-sm max-w-xs">
                Building the future of Zambian industry with AI-accelerated development and secure local hosting.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Links</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
                <li><Link href="/#projects" className="hover:text-blue-500 transition-colors">Projects</Link></li>
                <li><Link href="/insights" className="hover:text-blue-500 transition-colors">Insights</Link></li>
                <li><Link href="/careers" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Contact</h4>
              <p className="text-slate-400 text-sm">Zambia</p>
              <p className="text-slate-400 text-sm underline group hover:text-blue-500 transition-colors cursor-pointer">consult.morleyai@gmail.com</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-slate-500 text-xs flex justify-between">
            <p>© 2026 MorleyAI. All rights reserved.</p>
            <p>Zambia Data Protection Act No. 3 of 2021 Compliant</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
