import { cn } from '@/lib/utils';
import { createElement, type ComponentProps, type ElementType } from 'react';

/* ==========================================================
 * Global typography primitives — like Word styles.
 * Change once here, updates everywhere.
 *
 * Every component accepts an `as` prop to override the
 * rendered HTML element:
 *   <H1 as="span">…</H1>  →  <span class="…">…</span>
 *   <Muted as="div">…</Muted>  →  <div class="…">…</div>
 * ========================================================== */

type PolyProps<TDefault extends ElementType> = {
	as?: ElementType;
	className?: string;
} & Omit<ComponentProps<TDefault>, 'as'>;

/** Page title — Inter, bold, tight tracking */
export function H1({ as: Tag = 'h1', className, ...props }: PolyProps<'h1'>) {
	return createElement(Tag, {
		className: cn('text-3xl font-bold tracking-tight text-text', className),
		...props,
	});
}

/** Section heading — Inter, semibold */
export function H2({ as: Tag = 'h2', className, ...props }: PolyProps<'h2'>) {
	return createElement(Tag, {
		className: cn('text-2xl font-semibold tracking-tight text-text', className),
		...props,
	});
}

/** Card / subsection heading — Inter, semibold */
export function H3({ as: Tag = 'h3', className, ...props }: PolyProps<'h3'>) {
	return createElement(Tag, {
		className: cn('text-xl font-semibold text-text', className),
		...props,
	});
}

/** Small subheading — Space Grotesk (tech font), medium weight */
export function H4({ as: Tag = 'h4', className, ...props }: PolyProps<'h4'>) {
	return createElement(Tag, {
		className: cn('font-tech text-base font-medium tracking-wide text-text', className),
		...props,
	});
}

/** Tech label — Space Grotesk, uppercase, small, muted */
export function Label({ as: Tag = 'span', className, ...props }: PolyProps<'span'>) {
	return createElement(Tag, {
		className: cn('font-tech text-xs font-medium uppercase tracking-widest text-text-muted', className),
		...props,
	});
}

/** Body text — Inter, normal weight, comfortable reading */
export function Body({ as: Tag = 'p', className, ...props }: PolyProps<'p'>) {
	return createElement(Tag, {
		className: cn('text-base leading-relaxed text-text', className),
		...props,
	});
}

/** Muted text — Inter, smaller, secondary color */
export function Muted({ as: Tag = 'p', className, ...props }: PolyProps<'p'>) {
	return createElement(Tag, {
		className: cn('text-sm leading-relaxed text-text-muted', className),
		...props,
	});
}

/** Inline code — JetBrains Mono, with subtle background */
export function Code({ className, ...props }: ComponentProps<'code'>) {
	return (
		<code
			className={cn('rounded-md bg-surface-alt px-1.5 py-0.5 font-mono text-sm text-text', className)}
			{...props}
		/>
	);
}
