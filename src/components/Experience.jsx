import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { experience, education } from '../data/portfolio';

function Card({ item, isWork, index }) {
  const color = isWork ? '#4F8EF7' : '#A78BFA';
  const Icon = isWork ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-6 rounded-2xl transition-all duration-300"
      style={{ background: 'rgba(14,18,32,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}25`; e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.3)`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div
        className="absolute top-0 left-6 right-6 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }}
      />

      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: `${color}12`, border: `1px solid ${color}25` }}
        >
          <Icon size={17} style={{ color }} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="font-sans font-semibold text-[#F0F4FF] text-base">{item.title}</h3>
            <span
              className="text-[10px] font-mono px-2.5 py-1 rounded-full flex-shrink-0"
              style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
            >
              {item.period}
            </span>
          </div>
          {item.subtitle && (
            <p className="text-sm font-medium mb-0.5" style={{ color }}>{item.subtitle}</p>
          )}
          <p className="text-[#3D5070] text-xs mb-5">{item.company}</p>

          <ul className="space-y-2">
            {item.points.map((pt, pi) => (
              <li key={pi} className="flex items-start gap-2.5 text-[#7A8FAD] text-sm leading-relaxed">
                <CheckCircle2 size={13} className="flex-shrink-0 mt-1" style={{ color, opacity: 0.6 }} />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-mono text-xs text-[#4F8EF7] tracking-[0.2em] uppercase">04 — Experience</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(79,142,247,0.3), transparent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-semibold text-[#F0F4FF] mb-12 leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          Journey <span className="font-serif italic text-gradient-blue">so far.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Work */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-5"
            >
              <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(79,142,247,0.1)', border: '1px solid rgba(79,142,247,0.2)' }}>
                <Briefcase size={12} className="text-[#4F8EF7]" />
              </div>
              <span className="font-sans font-medium text-[#F0F4FF] text-sm">Work Experience</span>
            </motion.div>
            <div className="space-y-4">
              {experience.map((item, i) => <Card key={i} item={item} isWork={true} index={i} />)}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-5"
            >
              <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}>
                <GraduationCap size={12} className="text-[#A78BFA]" />
              </div>
              <span className="font-sans font-medium text-[#F0F4FF] text-sm">Education</span>
            </motion.div>
            <div className="space-y-4">
              {education.map((item, i) => <Card key={i} item={item} isWork={false} index={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
