import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Features', 'Platform', 'Benefits', 'Pricing'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo: Sophisticated Serif + Geometric Sans */}
        <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className="font-serif italic text-3xl font-medium tracking-tight text-white">Kora</span>
          <span className="font-sans text-sm font-bold tracking-[0.3em] text-brand-500 mt-1.5">OS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white text-sm font-medium tracking-wide transition-colors">
              {link}
            </a>
          ))}
          <button className="px-7 py-2.5 rounded-full glass border-brand-500/20 text-white hover:bg-brand-500 hover:text-white transition-all duration-300 text-sm font-semibold">
            Book a Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/5 p-8 flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white text-xl">{link}</a>
            ))}
            <button className="w-full py-4 rounded-xl bg-brand-500 text-white font-bold">Book a Demo</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;