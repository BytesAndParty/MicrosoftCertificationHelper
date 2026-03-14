import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export const router = createRouter({ routeTree });

// Type-safe router registration for hooks like useNavigate, useParams, etc.
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
