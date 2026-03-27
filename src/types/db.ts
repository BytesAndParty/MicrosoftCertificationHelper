export interface Flashcard {
	id: string;
	certId: string;
	topic: string;
	front: string;
	back: string;
	frontDe: string;
	backDe: string;
}

export interface GlossaryTerm {
	term: string;
	certId: string;
	definition: string;
	definitionDe: string;
}

export interface RoadmapTheme {
	id: string;
	certId: string;
	title: string;
	titleDe: string;
	goal: string;
	goalDe: string;
	todos: string[];
	todosDe: string[];
}
