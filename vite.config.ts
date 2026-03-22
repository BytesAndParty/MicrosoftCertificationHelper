import { resolve } from 'node:path';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		TanStackRouterVite({
			routesDirectory: './src/routes',
			generatedRouteTree: './src/routeTree.gen.ts',
			quoteStyle: 'single',
		}),
		react({
			babel: {
				plugins: ['babel-plugin-react-compiler'],
			},
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
});
