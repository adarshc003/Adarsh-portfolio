import { motion } from 'framer-motion';
import { MapPin, Code2, Zap, Target, Cpu, Trophy, FileText } from 'lucide-react';
import { personalInfo, about, achievements } from '../data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const focusItems = [
  { icon: Code2, label: 'Clean Code', desc: 'Readable, maintainable, scalable' },
  { icon: Zap, label: 'Performance', desc: 'Fast, optimized applications' },
  { icon: Target, label: 'User Focus', desc: 'Delightful user experiences' },
  { icon: Cpu, label: 'AI Integration', desc: 'Modern AI-powered features' },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs text-[#4F8EF7] tracking-[0.2em] uppercase">01 — About</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(79,142,247,0.3), transparent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left col — 3/5 */}
          <div className="md:col-span-3 space-y-8">
            <motion.div {...fadeUp(0.1)}>
              <h2 className="font-sans font-semibold text-[#F0F4FF] mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Building things for the{' '}
                <span className="font-serif italic text-gradient-blue">web.</span>
              </h2>
              <p className="text-[#7A8FAD] text-base leading-relaxed mb-4">
                {about.summary}
              </p>
              <p className="text-[#7A8FAD] text-base leading-relaxed">
                Currently growing through an AI-integrated internship at{' '}
                <span className="text-[#F0F4FF] font-medium">Techmaghi Pvt Ltd</span> in Kochi — 
                building real-world full stack applications and exploring AI integration in web development.
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div {...fadeUp(0.2)} className="space-y-3">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(79,142,247,0.1)', border: '1px solid rgba(79,142,247,0.2)' }}>
                    {a.icon === 'Trophy'
                      ? <Trophy size={16} className="text-[#4F8EF7]" />
                      : <FileText size={16} className="text-[#A78BFA]" />}
                  </div>
                  <span className="text-[#7A8FAD] text-sm">{a.text}</span>
                </div>
              ))}

              <div className="flex items-center gap-2 mt-2 text-[#3D5070] text-sm">
                <MapPin size={13} />
                <span className="font-mono text-xs">{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Right col — 2/5 */}
          <div className="md:col-span-2 space-y-3">
            {focusItems.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp(0.15 + i * 0.07)}
                whileHover={{ x: 4, borderColor: 'rgba(79,142,247,0.25)' }}
                className="group p-5 rounded-2xl cursor-default transition-all duration-300"
                style={{ background: 'rgba(14,18,32,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[rgba(79,142,247,0.15)]"
                    style={{ background: 'rgba(79,142,247,0.08)', border: '1px solid rgba(79,142,247,0.15)' }}>
                    <item.icon size={17} className="text-[#4F8EF7]" />
                  </div>
                  <div>
                    <p className="text-[#F0F4FF] text-sm font-medium">{item.label}</p>
                    <p className="text-[#3D5070] text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats card */}
            <motion.div
              {...fadeUp(0.45)}
              className="p-5 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(79,142,247,0.08), rgba(167,139,250,0.06))', border: '1px solid rgba(79,142,247,0.15)' }}
            >
              <div className="grid grid-cols-3 divide-x divide-[rgba(255,255,255,0.06)]">
                {[{ n: '3+', l: 'Projects' }, { n: 'MERN', l: 'Stack' }, { n: '2025', l: 'Graduate' }].map(({ n, l }) => (
                  <div key={l} className="text-center px-3">
                    <p className="font-sans font-semibold text-[#F0F4FF] text-lg">{n}</p>
                    <p className="text-[#3D5070] text-xs mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
