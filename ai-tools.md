# AI Workflow Tools

Quick reference for all available AI-powered skills and agents.

---

## Impeccable (Design Skills)

Slash commands for reviewing and improving UI code. Run these on a feature or component.

### Build

| Command | What it does |
|---|---|
| `/frontend-design` | Create distinctive, production-grade UI — avoids generic AI aesthetics |
| `/teach-impeccable` | One-time setup to gather design context for persistent guidelines |

### Review & Improve

| Command | What it does |
|---|---|
| `/audit` | Full interface audit: accessibility, performance, theming, responsive design |
| `/critique` | UX evaluation: visual hierarchy, information architecture, emotional resonance |
| `/polish` | Final quality pass: alignment, spacing, consistency, details |
| `/normalize` | Match your design system, ensure consistency across components |
| `/extract` | Find reusable components, design tokens, and patterns to consolidate |

### Visual Tuning

| Command | What it does |
|---|---|
| `/animate` | Add purposeful animations, micro-interactions, motion effects |
| `/colorize` | Add strategic color to monochromatic or flat interfaces |
| `/bolder` | Amplify safe/boring designs to be more visually striking |
| `/quieter` | Tone down overly bold or aggressive designs |
| `/delight` | Add moments of joy, personality, and unexpected touches |

### Production Hardening

| Command | What it does |
|---|---|
| `/harden` | Better error handling, i18n support, text overflow, edge cases |
| `/optimize` | Performance: loading speed, rendering, animations, bundle size |
| `/adapt` | Responsive design across screen sizes, devices, platforms |
| `/clarify` | Improve UX copy, error messages, labels, microcopy |
| `/distill` | Strip unnecessary complexity, simplify to essence |
| `/onboard` | Design onboarding flows, empty states, first-time experiences |

---

## Agency Agents

Specialist personas spawned via the Agent tool for focused work.

### Engineering Division

| Agent | Specialty |
|---|---|
| Frontend Developer | React, UI implementation, performance |
| Backend Architect | System design, APIs, database architecture |
| Software Architect | System design, DDD, architectural patterns |
| Senior Developer | Laravel/Livewire, advanced CSS, Three.js |
| Code Reviewer | Correctness, maintainability, security, performance |
| Database Optimizer | Schema design, query optimization, indexing |
| Rapid Prototyper | Fast MVP/proof-of-concept development |
| Technical Writer | Documentation, API references, tutorials |
| Security Engineer | Threat modeling, secure code review |
| DevOps Automator | CI/CD, infrastructure automation |
| Git Workflow Master | Branching, conventional commits, rebasing |
| AI Engineer | ML models, data pipelines, AI features |

### Design Division

| Agent | Specialty |
|---|---|
| UX Architect | Technical architecture + UX foundations |
| UI Designer | Visual design systems, component libraries |
| UX Researcher | User behavior, usability testing |
| Brand Guardian | Brand identity, consistency |
| Visual Storyteller | Visual narratives, multimedia content |

### Testing Division

| Agent | Specialty |
|---|---|
| Reality Checker | Evidence-based QA, defaults to "NEEDS WORK" |
| Evidence Collector | Screenshot-obsessed QA, finds 3-5 issues minimum |
| Accessibility Auditor | WCAG compliance, screen reader testing |
| Performance Benchmarker | Load testing, optimization measurement |
| API Tester | API validation, quality assurance |
| Workflow Optimizer | Process improvement, automation |

---

## OpenViking (Context Management)

Not yet installed. Context management server for enhanced project awareness.

Location: `~/Development/AI-Workflow/OpenViking/`
Requires: cmake + Rust toolchain

```bash
cd ~/Development/AI-Workflow/OpenViking
python3 -m venv .venv && source .venv/bin/activate
pip install -e .
openviking-server  # starts HTTP context server
```

---

## How These Get Used

- **Impeccable skills**: You can ask me to run any `/command` at any time, or I'll suggest them when relevant (e.g., `/audit` after building a component, `/polish` before final review)
- **Agency agents**: I spawn these automatically when a task matches a specialist (e.g., Frontend Developer for UI work, Database Optimizer for schema design)
- **You don't need to tell me each time** — but you can always request a specific tool if you want targeted feedback
