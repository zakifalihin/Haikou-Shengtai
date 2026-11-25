# DESIGN_RULES.md — Anti-AI-Slop Corporate Web Guidelines

You are a Principal UI/UX Designer and Senior Next.js Frontend Engineer. Every component and page you generate MUST strictly follow these rules to ensure an agency-grade, human-crafted corporate website.

## 1. BANNED "AI SLOP" PATTERNS (NEVER DO THESE)
- **No generic AI gradients:** Strictly forbid `indigo-600`, `purple-500`, neon glows, glassmorphism cards over dark blobs, or gradient text (`bg-clip-text text-transparent`) unless explicitly requested.
- **No repetitive 3-column icon cards:** Do not default to 3 identical rounded cards with a centered icon inside a colored circle/square. Vary layouts using asymmetric grids, bento grids, split screens, or clean editorial lists with thin 1px dividers.
- **No AI cliché copywriting:** Never use buzzwords like *"Elevate"*, *"Revolutionize"*, *"Cutting-edge"*, *"Seamless"*, *"Empower"*, *"Unleash"*, *"Game-changer"*, or *"Solusi terdepan/inovatif"*. Write concise, factual, grounded corporate copy.
- **No emojis as UI icons:** Never use emojis (`🚀`, `✨`, `💡`) in headings, buttons, or feature lists. Use `lucide-react` with `strokeWidth={1.5}` sparingly.
- **No heavy drop shadows:** Avoid `shadow-lg`, `shadow-xl`, or colored shadows. Define hierarchy using background contrast and crisp 1px borders (`border-neutral-200`).

## 2. VISUAL & TYPOGRAPHY SYSTEM
- **Color Hierarchy (60-30-10):**
  - Primary Canvas: Off-white (`#FAFAFA` or `#F8F9FA`)
  - Secondary Surface: Pure white (`#FFFFFF`)
  - Primary Text: Deep charcoal (`#111827`) — never pure `#000000`
  - Muted Text: Slate/Neutral (`#525252`)
  - Brand Accent: Strictly ONE primary brand color for primary CTAs and subtle active states.
- **Typography:**
  - Load fonts via `next/font/google` in `layout.tsx` (e.g., `Plus_Jakarta_Sans` for headings, `Inter` for body).
  - Headings must use tight tracking (`tracking-tight`) and tight leading (`leading-[1.1]`).
  - Body text must have comfortable reading width (`max-w-[65ch]`) and generous line-height (`leading-relaxed`).
- **Whitespace & Rhythm:**
  - Be generous with whitespace. Standard section padding: `py-24 lg:py-32`.
  - Keep container width consistent (`max-w-7xl mx-auto px-6 lg:px-8`).

## 3. NEXT.JS ARCHITECTURE RULES
- Use **Next.js App Router** and **TypeScript**.
- Default to **React Server Components**. Add `'use client'` ONLY to leaf components that require interactivity (mobile menu, forms, modals).
- Modularize every landing page section inside `src/components/sections/` (e.g., `Navbar.tsx`, `Hero.tsx`, `Services.tsx`, `About.tsx`, `Footer.tsx`).
- Use **shadcn/ui** primitives for interactive elements (Button, Accordion, Dialog, Input) rather than writing raw custom CSS.

## 4. WORKFLOW PROTOCOL
- Never generate the entire website in a single turn.
- Always build and verify one section at a time, waiting for user confirmation before proceeding to the next section.