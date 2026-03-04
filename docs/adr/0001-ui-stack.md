# ADR 0001: UI Refactor Stack

## Status

Accepted (2026-03-04)

## Context

The current app is Astro + large plain JavaScript DOM orchestration.  
Feature velocity is slowing due to growing UI complexity, larger state surface, and limited component reusability.

## Decision

Use:

- Astro as the host framework
- React islands for interactive study modules
- shadcn/ui component pattern
- Tailwind CSS for utility styling and design tokens

## Rationale

- Minimal migration risk: keep Astro pages/routes and migrate interactivity incrementally.
- Strong component ergonomics: shadcn primitives + Radix accessibility base.
- Better maintainability: modular React components and composable state boundaries.
- Theme and design consistency: shared tokens with class-based light/dark mode support.

## Alternatives Considered

- Continue with plain JavaScript: fastest short term, but high long-term complexity.
- Full Next.js rewrite: stronger app runtime, but unnecessary migration cost right now.
- Add TanStack stack immediately: useful later, but premature before UI/module boundaries are stabilized.

## Consequences

- Short-term setup overhead (React/Tailwind/shadcn foundation).
- During migration, legacy and new UI layers coexist temporarily.
- Later phases can selectively adopt TanStack tools if complexity justifies them.
