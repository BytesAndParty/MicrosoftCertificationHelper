"use client"

import { cn } from '../../lib/utils';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const MODES = [
	{ value: 'quiz', label: 'Quiz', labelDe: 'Quiz', icon: '\u270D' },
	{ value: 'exam', label: 'Exam', labelDe: 'Prüfung', icon: '\uD83D\uDCDD' },
	{ value: 'flashcards', label: 'Flashcards', labelDe: 'Flashcards', icon: '\uD83C\uDFCF' },
	{ value: 'glossary', label: 'Glossary', labelDe: 'Glossar', icon: '\uD83D\uDCD6' },
	{ value: 'journal', label: 'Journal', labelDe: 'Journal', icon: '\uD83D\uDCCB' },
] as const;

export type StudyMode = (typeof MODES)[number]['value'];

interface ModeNavProps {
	lang?: 'en' | 'de';
	activeMode?: StudyMode;
	onModeChange?: (mode: StudyMode) => void;
	className?: string;
}

export function ModeNav({ lang = 'en', activeMode, onModeChange, className }: ModeNavProps) {
	return (
		<ToggleGroup
			type="single"
			value={activeMode}
			onValueChange={(val) => {
				if (val) onModeChange?.(val as StudyMode);
			}}
			variant="outline"
			size="sm"
			className={cn('flex-wrap', className)}
			aria-label={lang === 'de' ? 'Lernmodi' : 'Study modes'}
		>
			{MODES.map(({ value, label, labelDe }) => (
				<ToggleGroupItem
					key={value}
					value={value}
					data-mode={value}
					className="text-xs"
				>
					{lang === 'de' ? labelDe : label}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	);
}
