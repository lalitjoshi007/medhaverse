# Medhaverse | The Universe of Intelligence

A modern SaaS landing page for **Medhaverse Pvt Ltd**, blending futuristic AI SaaS design with Sanskrit scientific philosophy (Medha = intelligence, Verse = universe).

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (dark theme, custom design tokens)
- **Framer Motion** (scroll reveal, hover animations, glowing effects)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` – Layout, global styles, main page
- `components/` – Header, Hero (with neural particles), About, Products, Services, Philosophy, WhyMedhaverse, CTA, Footer
- Shared: `ScrollReveal`, `NeuralParticles`, glassmorphism and mandala-style backgrounds

## Features

- **Hero**: Animated gradient background, neural network particle canvas, mandala-style rings, glassmorphism badge
- **About**: Medha + Verse concept with feature cards and Sanskrit accent
- **Products**: Three product cards (MedhaAnalytics, VerseCloud, CogniSaaS) with hover scale
- **Services**: Four service tiles (SaaS, AI, Scalable Architecture, Enterprise)
- **Philosophy**: Timeline-style flow (Ancient Knowledge → Scientific Thinking → Modern AI)
- **Why Medhaverse**: Four feature bullets + 99.9% uptime CTA card
- **CTA**: Gradient banner with “Enter the Medhaverse” and Request Demo
- **Footer**: Company info, navigation, connect, legal links

Animations: scroll-triggered fade-in, hover scale on cards/buttons, subtle glow, smooth scrolling. Responsive and mobile-optimized.

## Build

```bash
npm run build
npm start
```

## Push to GitHub (medhaverse-pvt-ltd)

If you get **403 Permission denied** when pushing to `medhaverse-pvt-ltd/medhaverse`:

1. **Get access** – An org owner must add your GitHub user as a collaborator with **Write** access to the repo, or add you to the organization.

2. **Create a Personal Access Token (PAT)**  
   - GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**.  
   - **Generate new token**, enable **repo**, then copy the token.

3. **Push using the token** (replace `YOUR_TOKEN` with the token you copied):
   ```bash
   git remote set-url origin https://medhaverse-pvt-ltd:YOUR_TOKEN@github.com/medhaverse-pvt-ltd/medhaverse.git
   git push -u origin main
   ```
   To stop storing the token in the remote URL (e.g. after push works), set the remote back to:
   ```bash
   git remote set-url origin https://github.com/medhaverse-pvt-ltd/medhaverse.git
   ```
