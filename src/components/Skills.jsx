import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const categories = {
  Frontend: { color: '#4F8EF7', label: '01' },
  Backend:  { color: '#A78BFA', label: '02' },
  Database: { color: '#34D399', label: '03' },
  Tools:    { color: '#F59E0B', label: '04' },
};

const techPills = [
  'MongoDB','Express.js','React.js','Node.js','JavaScript ES6+',
  'HTML5','CSS3','JWT','bcrypt','RESTful APIs',
  'Git','GitHub','Postman','MongoDB Atlas','MySQL',
  'Bootstrap','Python','API Integration',
];

function SkillRow({ name, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-[#F0F4FF] text-sm font-medium">{name}</span>
        <span className="font-mono text-[10px] text-[#3D5070]">{level}%</span>
      </div>
      <div className="h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}60, ${color})` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-mono text-xs text-[#4F8EF7] tracking-[0.2em] uppercase">02 — Skills</span>
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
          Technical <span className="font-serif italic text-gradient-blue">expertise.</span>
        </motion.h2>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          {Object.entries(skills).map(([cat, items], ci) => {
            const { color, label } = categories[cat] || { color: '#4F8EF7', label: '0' + (ci+1) };
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ borderColor: `${color}30`, boxShadow: `0 20px 60px rgba(0,0,0,0.3)` }}
                className="p-6 rounded-2xl transition-all duration-400"
                style={{ background: 'rgba(14,18,32,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-5 rounded-full" style={{ background: color }} />
                    <span className="font-sans font-semibold text-[#F0F4FF] text-sm">{cat}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#3D5070]">{label}</span>
                </div>

                <div className="space-y-5">
                  {items.map((sk, si) => (
                    <SkillRow key={sk.name} name={sk.name} level={sk.level} color={color} delay={ci * 0.1 + si * 0.05} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="p-7 rounded-2xl"
          style={{ background: 'rgba(14,18,32,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="font-mono text-[10px] text-[#3D5070] tracking-[0.2em] uppercase mb-5">All Technologies</p>
          <div className="flex flex-wrap gap-2.5">
            {techPills.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.05, borderColor: 'rgba(79,142,247,0.35)', color: '#F0F4FF' }}
                className="px-3.5 py-1.5 rounded-lg text-xs text-[#7A8FAD] font-medium cursor-default transition-colors duration-150"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
