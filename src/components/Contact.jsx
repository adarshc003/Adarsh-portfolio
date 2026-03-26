import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, MapPin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);

  try {
    await emailjs.send(
   import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    setSent(true);
    setForm({ name: '', email: '', message: '' });

  } catch (error) {
    console.error(error);
  }

  setSending(false);
};

  const contacts = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: Github, label: 'GitHub', value: 'adarshc003', href: personalInfo.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'adarsh-c003', href: personalInfo.linkedin },
  ];

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    background: 'rgba(6,8,15,0.8)',
    border: '1px solid rgba(255,255,255,0.07)',
    color: '#F0F4FF',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-mono text-xs text-[#4F8EF7] tracking-[0.2em] uppercase">05 — Contact</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(79,142,247,0.3), transparent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-sans font-semibold text-[#F0F4FF] mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Let's build{' '}
              <span className="font-serif italic text-gradient-blue">together.</span>
            </h2>
            <p className="text-[#7A8FAD] text-base leading-relaxed mb-10">
              I'm actively looking for full stack developer roles. Whether it's a new project, 
              a full-time opportunity, or just a conversation — I'd love to hear from you.
            </p>

            <div className="space-y-3 mb-8">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{ background: 'rgba(14,18,32,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,142,247,0.2)'; e.currentTarget.style.background = 'rgba(14,18,32,0.95)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(14,18,32,0.7)'; }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(79,142,247,0.08)', border: '1px solid rgba(79,142,247,0.15)' }}>
                    <Icon size={16} className="text-[#4F8EF7]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#3D5070] text-[10px] mb-0.5 font-mono uppercase tracking-widest">{label}</p>
                    <p className="text-[#F0F4FF] text-sm font-medium truncate">{value}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-[#3D5070] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Open to work banner */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(79,142,247,0.07), rgba(167,139,250,0.05))', border: '1px solid rgba(79,142,247,0.15)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-emerald-400 text-sm font-medium">Open to opportunities</span>
              </div>
              <p className="text-[#7A8FAD] text-sm">Available for full-time, internships and freelance projects.</p>
              <div className="flex items-center gap-1.5 mt-2 text-[#3D5070] text-xs">
                <MapPin size={11} />
                <span className="font-mono">{personalInfo.location} · Open to Remote</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'rgba(14,18,32,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-4xl mb-5">✦</div>
                  <h3 className="font-sans font-semibold text-[#F0F4FF] text-xl mb-3">Message received.</h3>
                  <p className="text-[#7A8FAD] text-sm mb-7">I'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)}
                    className="text-[#4F8EF7] text-sm hover:underline font-medium">
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[#3D5070] text-xs font-mono uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange}
                      required placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(79,142,247,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
                    />
                  </div>
                  <div>
                    <label className="block text-[#3D5070] text-xs font-mono uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      required placeholder="you@example.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(79,142,247,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
                    />
                  </div>
                  <div>
                    <label className="block text-[#3D5070] text-xs font-mono uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      required rows={5} placeholder="Tell me about your project or role..."
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(79,142,247,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
                    />
                  </div>
                  <button
                    type="submit" disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
                    style={{
                      background: 'linear-gradient(135deg, #4F8EF7, #A78BFA)',
                      boxShadow: '0 4px 24px rgba(79,142,247,0.25)',
                    }}
                  >
                    {sending ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
