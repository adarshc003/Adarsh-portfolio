import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
const sections = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sections);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={`transition-all duration-500 ${scrolled ? 'mx-4 mt-3' : 'mx-0 mt-0'}`}>
          <div
            className={`transition-all duration-500 ${
              scrolled
                ? 'glass rounded-2xl border border-[rgba(79,142,247,0.12)] shadow-2xl'
                : 'bg-transparent border-b border-transparent'
            }`}
          >
            <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
              {/* Logo */}
              <a href="#home" className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #4F8EF7, #A78BFA)' }}>
                  <span className="text-white font-sans font-semibold text-sm">A</span>
                </div>
                <span className="font-sans font-medium text-[#F0F4FF] tracking-tight">
                  Adarsh<span className="text-[#4F8EF7]">.</span>
                </span>
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = active === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`relative px-4 py-2 text-sm transition-colors duration-200 rounded-lg ${
                        isActive ? 'text-[#F0F4FF]' : 'text-[#7A8FAD] hover:text-[#F0F4FF]'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-lg"
                          style={{ background: 'rgba(79,142,247,0.1)', border: '1px solid rgba(79,142,247,0.15)' }}
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  className="ml-3 px-5 py-2 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #4F8EF7, #A78BFA)', boxShadow: '0 4px 20px rgba(79,142,247,0.25)' }}
                >
                  Hire Me
                </a>
              </div>

              <button
                className="md:hidden text-[#7A8FAD] hover:text-white transition-colors"
                onClick={() => setMenuOpen(v => !v)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 glass rounded-2xl border border-[rgba(79,142,247,0.12)] md:hidden overflow-hidden"
          >
            <div className="flex flex-col py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3.5 text-[#7A8FAD] hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
