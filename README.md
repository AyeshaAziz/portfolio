# Ayesha Aziz — Portfolio

A personal portfolio website for **Ayesha Aziz**, a frontend developer with 9+ years of experience. Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

🌐 **Live site:** [https://ayeshaaziz.github.io/portfolio](https://ayeshaaziz.github.io/portfolio)

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React 18, TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3, PostCSS |
| UI | shadcn/ui (Radix primitives) |
| Routing | React Router v6 |
| Icons | Lucide React, React Icons |
| Charts | Recharts |
| Deployment | GitHub Pages |

## Getting Started

```bash
# Clone
git clone https://github.com/AyeshaAziz/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server on port 8080 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all source files |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Deploy `dist/` to GitHub Pages |

## Project Structure

```
src/
├── components/       # React components
│   ├── About/        # About Me section
│   ├── Navigation/   # Desktop & mobile nav
│   ├── Projects/     # Project cards & data
│   ├── Skills/       # Skill cards & data
│   ├── Social/       # Social links component
│   └── ui/           # shadcn/ui components (50+)
├── hooks/            # Custom React hooks
├── lib/              # Utilities, types, constants
├── pages/            # Route pages (Index, 404)
├── assets/           # Images, icons, CV PDF
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Tailwind + design tokens
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`. The workflow:

1. Installs dependencies (`npm ci`)
2. Runs lint (`npm run lint`)
3. Runs TypeScript check (`npx tsc --noEmit`)
4. Builds (`npm run build`)
5. Deploys `dist/` to the `gh-pages` branch
