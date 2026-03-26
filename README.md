# Adarsh C — Premium Developer Portfolio v2

A premium, Apple-inspired developer portfolio built with React + Vite, Tailwind CSS, and Framer Motion.

---

## Folder Structure

```
portfolio/
├── public/
│   ├── adarsh.webp          ← Your profile photo (replace with your own)
│   ├── adarsh.jpg           ← Fallback photo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Background.jsx   ← Ambient gradient/dot grid background
│   │   ├── Navbar.jsx       ← Floating sticky navbar with active highlight
│   │   ├── Hero.jsx         ← Hero with 3D tilt profile card + photo
│   │   ├── About.jsx        ← About, focus cards, achievements
│   │   ├── Skills.jsx       ← Skill bars + tech pill cloud
│   │   ├── Projects.jsx     ← Project cards with tech color coding
│   │   ├── Experience.jsx   ← Work + education cards
│   │   ├── Contact.jsx      ← Contact links + message form
│   │   └── Footer.jsx       ← Minimal footer
│   ├── data/
│   │   └── portfolio.js     ← ✏️  ALL your content lives here
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Quick Start

```bash
cd portfolio
npm install
npm run dev
# → http://localhost:5173
```

---

## Customization

### Content
Edit `src/data/portfolio.js` to update all personal info, projects, skills, etc.

### Profile Photo
Replace `public/adarsh.webp` with your own photo (same filename, or update the path in `Hero.jsx`).

### Resume PDF
1. Place `resume.pdf` in the `public/` folder
2. In `portfolio.js`, set `resume: "/resume.pdf"`

---

## Build & Deploy

```bash
npm run build   # Outputs to /dist

# Vercel (recommended)
npx vercel

# Netlify — drag /dist to netlify.com/drop

# Render
# Build: npm run build | Publish: dist
```

---

## Tech Stack

| | Purpose |
|---|---|
| React + Vite | UI + fast builds |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations (scroll, hover, spring 3D tilt) |
| Lucide React | Icons |
| Inter + Instrument Serif + JetBrains Mono | Typography system |

No Three.js — the 3D profile card effect is pure CSS + Framer Motion spring physics.
