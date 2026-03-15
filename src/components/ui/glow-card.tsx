import { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	glowRadius?: number;
	/** Show full-border glow permanently (no cursor needed) */
	active?: boolean;
}

export function GlowCard({
	children,
	className,
	glowRadius = 250,
	active = false,
	style,
	...props
}: GlowCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	}, []);

	// Active: permanent full-border glow, cursor-follow disabled
	// Inactive: cursor-follow glow on hover only
	const showGlow = active || isHovering;

	return (
		<div
			ref={cardRef}
			className={cn('glow-card', active && 'glow-card-active', className)}
			onMouseMove={active ? undefined : handleMouseMove}
			onMouseEnter={active ? undefined : () => setIsHovering(true)}
			onMouseLeave={active ? undefined : () => setIsHovering(false)}
			style={
				{
					...style,
					'--glow-x': active ? '50%' : `${mousePosition.x}px`,
					'--glow-y': active ? '50%' : `${mousePosition.y}px`,
					'--glow-opacity': showGlow ? 1 : 0,
					'--glow-size': active ? '600px' : `${glowRadius}px`,
				} as React.CSSProperties
			}
			{...props}
		>
			{children}
		</div>
	);
}
