import { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	glowRadius?: number;
}

export function GlowCard({
	children,
	className,
	glowRadius = 250,
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

	return (
		<div
			ref={cardRef}
			className={cn('glow-card', className)}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			style={
				{
					...style,
					'--glow-x': `${mousePosition.x}px`,
					'--glow-y': `${mousePosition.y}px`,
					'--glow-opacity': isHovering ? 1 : 0,
					'--glow-size': `${glowRadius}px`,
				} as React.CSSProperties
			}
			{...props}
		>
			{children}
		</div>
	);
}
