import { motion } from 'framer-motion';
import { Github, ExternalLink, ShoppingCart, Calendar, Bot, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';

const iconMap = { Cart: ShoppingCart, Calendar, Bot };

const techColors = {
  'React.js': '#4F8EF7',
  'Node.js': '#34D399',
  'MongoDB': '#34D399',
  'JWT': '#F59E0B',
  'AI/ML': '#A78BFA',
  'AI Integration': '#A78BFA',
  'Express.js': '#7A8FAD',
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-mono text-xs text-[#4F8EF7] tracking-[0.2em] uppercase">03 — Projects</span>
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
          Selected <span className="font-serif italic text-gradient-blue">work.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Bot;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-7 rounded-2xl flex flex-col transition-all duration-400 cursor-default"
                style={{ background: 'rgba(14,18,32,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(79,142,247,0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(79,142,247,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top shimmer on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(79,142,247,0.5), rgba(167,139,250,0.3), transparent)' }}
                />

                {/* Icon + number */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(79,142,247,0.1)', border: '1px solid rgba(79,142,247,0.2)' }}
                  >
                    <Icon size={20} className="text-[#4F8EF7]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#3D5070]">0{i + 1}</span>
                </div>

                {/* Title */}
                <h3 className="font-sans font-semibold text-[#F0F4FF] text-lg mb-3 group-hover:text-white transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#7A8FAD] text-sm leading-relaxed flex-1 mb-7">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium"
                      style={{
                        background: techColors[t] ? `${techColors[t]}12` : 'rgba(255,255,255,0.04)',
                        color: techColors[t] || '#7A8FAD',
                        border: `1px solid ${techColors[t] ? techColors[t] + '25' : 'rgba(255,255,255,0.07)'}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className="flex items-center gap-5 pt-5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#3D5070] hover:text-[#F0F4FF] text-xs font-medium transition-colors duration-150"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#3D5070] hover:text-[#4F8EF7] text-xs font-medium transition-colors duration-150"
                  >
                    <ArrowUpRight size={14} /> Live Demo
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/adarshc003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm text-[#7A8FAD] hover:text-[#F0F4FF] transition-all duration-200 hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Github size={15} /> View all on GitHub <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
