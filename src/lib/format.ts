/**
 * Format a timestamp into a localized short date+time string.
 * Shared across GlossaryDialog, FlashcardsDialog, JournalDialog.
 */
export function formatDate(timestamp: number, lang: string): string {
	const locale = lang === 'de' ? 'de-DE' : 'en-US';
	return new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short' }).format(new Date(timestamp));
}
