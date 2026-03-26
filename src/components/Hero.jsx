import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const stagger = (i) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
});

function ProfileCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center md:justify-end"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        {/* Outer glow ring */}
        <div
          className="absolute -inset-4 rounded-[2.5rem] opacity-50"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(79,142,247,0.15), transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Card container */}
        <div
          className="relative rounded-[2rem] overflow-hidden"
          style={{
            width: '300px',
            height: '380px',
            background: 'linear-gradient(135deg, rgba(20,26,46,0.95) 0%, rgba(14,18,32,0.98) 100%)',
            border: '1px solid rgba(79,142,247,0.2)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 20px 40px rgba(79,142,247,0.08)',
          }}
        >
          {/* Top shimmer */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(79,142,247,0.6), rgba(167,139,250,0.4), transparent)' }}
          />

          {/* Image */}
          <div className="relative h-[280px] overflow-hidden">
            <img
              src="/1000114544.png"
              alt="Adarsh C"
              className="w-full h-full object-cover object-top"
              style={{ filter: 'brightness(0.95) contrast(1.05) saturate(0.95)' }}
            />
            {/* Bottom gradient on image */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24"
              style={{ background: 'linear-gradient(to top, rgba(14,18,32,0.98) 0%, transparent 100%)' }}
            />
          </div>

          {/* Card bottom info */}
          <div className="px-5 pb-5 -mt-2 relative">
            <p className="font-sans font-semibold text-[#F0F4FF] text-base">Adarsh C</p>
            <p className="text-[#7A8FAD] text-xs mt-0.5 font-mono">MERN Stack Developer</p>

            {/* Status dot */}
            <div className="absolute top-0 right-5 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">Open to work</span>
            </div>
          </div>

          {/* 3D depth layer */}
          <div
            className="absolute inset-0 rounded-[2rem] pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)' }}
          />
        </div>

        {/* Floating badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-12 top-8 glass rounded-xl px-3 py-2 border border-[rgba(79,142,247,0.2)]"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
        >
          <p className="text-[10px] text-[#7A8FAD] mb-0.5">Stack</p>
          <p className="text-xs font-mono font-medium text-[#4F8EF7]">MERN</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute -left-14 bottom-20 glass rounded-xl px-3 py-2 border border-[rgba(167,139,250,0.2)]"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
        >
          <p className="text-[10px] text-[#7A8FAD] mb-0.5">Projects</p>
          <p className="text-xs font-mono font-medium text-[#A78BFA]">3+ Built</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div {...stagger(0)} className="inline-flex items-center gap-2 mb-8">
              <div
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono"
                style={{
                  background: 'rgba(79,142,247,0.08)',
                  border: '1px solid rgba(79,142,247,0.2)',
                  color: '#4F8EF7',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for opportunities
              </div>
            </motion.div>

            <motion.div {...stagger(1)}>
              <h1 className="font-sans font-semibold tracking-tight leading-[1.05] mb-3"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}>
                <span className="text-[#F0F4FF]">Adarsh</span>
                <span className="text-[#4F8EF7]"> C.</span>
              </h1>
              <p className="font-serif italic text-[#7A8FAD] mb-6"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}>
                MERN Stack Developer
              </p>
            </motion.div>

            <motion.p {...stagger(2)} className="text-[#7A8FAD] text-base leading-relaxed mb-10 max-w-md">
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...stagger(3)} className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #4F8EF7, #A78BFA)',
                  boxShadow: '0 4px 24px rgba(79,142,247,0.3)',
                }}
              >
                View Projects <ArrowRight size={15} />
              </a>
              <a
                href="/Adarsh C_MERN_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#F0F4FF',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <Download size={15} /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-[#7A8FAD] transition-all duration-200 hover:text-white"
                style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <Mail size={15} /> Contact
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...stagger(4)} className="flex items-center gap-4">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-10 h-10 flex items-center justify-center rounded-xl text-[#3D5070] hover:text-[#4F8EF7] transition-all duration-200 hover:scale-110"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}
                >
                  <Icon size={17} />
                </a>
              ))}
              <div className="h-4 w-px bg-[#161D2F] mx-1" />
              <span className="text-[#3D5070] text-xs font-mono">{personalInfo.location}</span>
            </motion.div>
          </div>

          {/* Right — profile card */}
          <ProfileCard />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(to bottom, #4F8EF7, transparent)' }}
        />
      </motion.div>
    </section>
  );
}
