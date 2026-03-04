import * as React from 'react';
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme } from 'next-themes';

const THEME_STORAGE_KEY = 'ai900_theme_pref';

function ThemeSync() {
	const { resolvedTheme } = useTheme();

	React.useEffect(() => {
		const resolved = resolvedTheme === 'dark' ? 'dark' : 'light';
		document.documentElement.dataset.theme = resolved;
		document.documentElement.classList.toggle('dark', resolved === 'dark');
	}, [resolvedTheme]);

	return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider
			storageKey={THEME_STORAGE_KEY}
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			{...props}
		>
			<ThemeSync />
			{children}
		</NextThemesProvider>
	);
}
