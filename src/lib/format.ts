export function formatDate(timestamp: number): string {
	const d = new Date(timestamp);
	return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}
