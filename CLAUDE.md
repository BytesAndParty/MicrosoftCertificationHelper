# AI-900 Study Helper — Project Instructions

## Commands
- `bun run dev` — Start dev server
- `bun run build` — Production build (tsc + vite)
- `bun run preview` — Preview production build
- `bun run lint` — Run ESLint
- `bun run format` — Format with Prettier

**Always use `bun` instead of npm/npx.**

## Tech Stack
- React 19 + Vite + TypeScript (strict mode)
- Tailwind CSS v4 (CSS-based `@theme`, no JS config)
- TanStack Router (file-based routing in `src/routes/`)
- Zustand (state management)
- shadcn/ui primitives (manually copied, not CLI)
- framer-motion (animations)

## Language
- All code, UI text, comments, and commit messages must be in **English**
- This applies even when the user communicates in German

## Code Quality Rules
- TypeScript strict mode with `noUncheckedIndexedAccess`
- Extract shared components when used in 2+ places
- Add code comments at key decision points — not boilerplate
- Minimal design: if it doesn't help the user learn, leave it out
- No `any` types — use proper interfaces

## Path Aliases
- `@/*` → `src/*`
- shadcn components: `@/components/ui/*`
- Utilities: `@/lib/utils`

## Component Library
Reusable components at `~/Development/__Components__/`:
- `accent-switcher` — Theme + accent picker
- `glow-card` — Cursor-following glow effect
- `magnetic-button` — Magnetic hover motion
- `text-scramble` — Scramble/reveal text (needs framer-motion)
- `scroll-rotate` — Scroll-based rotation (needs framer-motion)

Copy into `src/components/ui/` when needed.

## Development Workflow
- Work iteratively: one feature at a time, test until it works, then next step
- Do NOT read old codebase files for "inspiration" — design fresh
- Data files in `src/data/` contain the learning content (quiz, flashcards, glossary, roadmap)

## AI Workflow Tools

### Impeccable (Design Skills)
Skills are installed in `.claude/skills/`. Available commands:
`/audit`, `/polish`, `/animate`, `/colorize`, `/critique`, `/normalize`, `/optimize`, `/distill`, `/extract`, `/harden`, `/adapt`, `/bolder`, `/quieter`, `/clarify`, `/delight`, `/frontend-design`, `/teach-impeccable`

Use these to review and improve UI code quality.

### Agency Agents
Agent personas installed in `~/.claude/agents/` (engineering, design, testing divisions).
Activate specialist personas when needed for focused work.

### OpenViking (Context Management)
Cloned at `~/Development/__AI-Workflow__/OpenViking/`.
Requires cmake + Rust toolchain to build. Install when ready:
```bash
cd ~/Development/__AI-Workflow__/OpenViking
python3 -m venv .venv && source .venv/bin/activate
pip install -e .
openviking-server  # starts HTTP context server
```
