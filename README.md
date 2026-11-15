# Aadil Juraid S — 3D Portfolio

This repository is intended to host an adapted version of [Naresh Khatri's 3D Portfolio](https://github.com/Naresh-Khatri/3d-portfolio).

**Current status:** Initial repository setup only. The source code has **not yet been imported**. Please do not deploy this repository expecting a working website.

## Import the original website

The source template is MIT licensed. Keep its original `LICENSE` and copyright notice. You can clone the original locally, customize it, then push to this destination using:

```bash
git clone https://github.com/Naresh-Khatri/3d-portfolio.git aadil-portfolio
cd aadil-portfolio
git remote rename origin upstream
git remote add origin https://github.com/Aamilsamsung/Aadil.git
```

Customize `src/data/config.ts`, `src/data/constants.ts`, `src/data/projects.tsx`, and `src/components/sections/hero.tsx`. Use **Aadil Juraid S** as the name and remove Naresh's original resume, projects, work history and social profiles. Only add personal claims and contact information approved by Aadil. Then push to the destination repo.

For production, use Node.js 20.9+ and pnpm 11.20.0; run `pnpm install`, `pnpm lint`, `pnpm typecheck`, and `pnpm build`. Deploy the Next.js app to Vercel.
