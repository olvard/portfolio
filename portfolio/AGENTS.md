# AGENTS.md

## Project Overview

This is Oliver Lundin's personal portfolio site. It is a Next.js 15 application using the App Router, React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

The application has one route:

- `/` - About section and project gallery on desktop; About and experience content on mobile.

## Repository Layout

- `app/` - App Router source, global styles, hooks, routes, components, and local content data.
- `app/components/` - Shared UI components used across routes.
- `app/assets/projects.json` - Project content displayed by `ProjectGallery`.
- `app/assets/resume.json` - Experience content displayed by `ResumeList`.
- `app/hooks/` - Client-side React hooks such as `useIsMobile`.
- `public/` - Static images and SVG social icons referenced with root-relative paths.
- `next.config.ts` - Next.js configuration, including allowed remote image hosts.
- `eslint.config.mjs` - ESLint flat configuration based on Next core web vitals and TypeScript rules.
- `postcss.config.mjs` - Tailwind CSS 4 PostCSS integration.

Do not edit generated output in `.next/`, `tsconfig.tsbuildinfo`, or `next-env.d.ts`.

## Development Commands

Use npm and the committed `package-lock.json`:

```bash
npm install
npm run dev       # Start Next.js with Turbopack
npm run lint      # Run the configured lint command
npm run build     # Create a production build
npm run start     # Serve the production build
```

There is currently no test script or test suite. For changes affecting rendering, verify the relevant route in the browser at desktop and below the 1080px mobile breakpoint. Run `npm run lint` and `npm run build` before submitting changes when possible.

## Implementation Conventions

- Keep route files under `app/<route>/page.tsx` thin and place reusable UI in `app/components/`.
- Keep portfolio and experience records in the JSON files under `app/assets/` instead of hardcoding repeated records in JSX.
- Preserve strict TypeScript settings. Use explicit component prop types and keep JSON shapes consistent with the consuming components.
- Use the public Next.js APIs `next/link` and `next/image`. Do not import internal Next.js paths.
- Use Tailwind utility classes in JSX for component styling. Global colors, font imports, and base body styling belong in `app/globals.css`.
- Preserve the existing visual language: black/tan base colors, gray content panels, Funnel Display typography, and orange/pink/blue accents.
- External images used with `next/image` must have their hostname added to `images.remotePatterns` in `next.config.ts`. Current project images use `raw.githubusercontent.com`.
- External links opened in a new tab should include `rel="noopener noreferrer"`.
- Use stable content identifiers for React keys when available rather than array indexes.

## Client Components and Responsive Behavior

- `app/page.tsx`, `NavBar`, and `PageWrapper` are client components. Keep browser APIs and Framer Motion usage inside client components.
- `useIsMobile` checks `window.innerWidth` and uses a 1080px breakpoint. Changes to the home page must account for its separate desktop and mobile render branches.
- The mobile home currently omits the project gallery intentionally in commented JSX. Do not assume desktop sections appear on mobile without checking the intended design.
- `NavBar` uses `usePathname`; hash fragments are not included in the pathname, so section-link active-state logic needs special handling if changed.
- Prefer responsive Tailwind classes for layout changes. Be careful with existing custom-looking utilities such as `w-5/7`, `w-2/7`, `h-78`, and `ml-45`; confirm the resulting CSS when modifying those layouts.

## Content and Asset Changes

- Update `projects.json` fields (`title`, `description`, `imageUrl`, `link`, `tags`) together with the rendering types when changing project content.
- Update `resume.json` fields (`title`, `organization`, `date`, `description`, `tags`, optional `link`) together with the rendering types when changing experience content.
- Add local static assets to `public/` and reference them with paths such as `/github.svg`.
- Keep metadata in `app/layout.tsx` current when the site's title or description changes.

## Git and Change Safety

Inspect `git diff` and `git status` before editing. The working tree may contain user changes; preserve unrelated modifications and untracked files. Do not commit generated build output, dependency directories, environment files, or secrets.
