import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 mb-1.5 group">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #4F8EF7, #A78BFA)' }}>
                <span className="text-white font-sans font-semibold text-xs">A</span>
              </div>
              <span className="font-sans font-medium text-[#F0F4FF] tracking-tight text-sm">
                Adarsh<span className="text-[#4F8EF7]">.</span>
              </span>
            </a>
            <p className="text-[#3D5070] text-xs font-mono">
              Designed & built by Adarsh C · {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl text-[#3D5070] hover:text-[#4F8EF7] transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <p className="text-[#3D5070] text-xs font-mono">
            React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
