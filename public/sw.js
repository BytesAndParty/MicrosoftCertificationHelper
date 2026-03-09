// AI-900 Study Companion - Service Worker
const CACHE_VERSION = 'ai900-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DATA_CACHE = `${CACHE_VERSION}-data`;

// Static assets to pre-cache on install
const PRECACHE_URLS = [
	'/',
	'/favicon.svg',
	'/icon.svg',
	'/manifest.webmanifest',
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
	);
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys
					.filter((key) => key !== STATIC_CACHE && key !== DATA_CACHE)
					.map((key) => caches.delete(key))
			)
		)
	);
	self.clients.claim();
});

self.addEventListener('fetch', (event) => {
	const { request } = event;
	const url = new URL(request.url);

	// Only handle same-origin requests
	if (url.origin !== self.location.origin) return;

	// HTML pages: network-first, cache fallback
	if (request.mode === 'navigate') {
		event.respondWith(
			fetch(request)
				.then((response) => {
					const clone = response.clone();
					caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
					return response;
				})
				.catch(() => caches.match(request))
		);
		return;
	}

	// JS/CSS assets (including quiz-questions chunk): stale-while-revalidate
	if (url.pathname.match(/\/_astro\/.+\.(js|css)$/)) {
		event.respondWith(
			caches.open(DATA_CACHE).then((cache) =>
				cache.match(request).then((cached) => {
					const fetchPromise = fetch(request).then((response) => {
						cache.put(request, response.clone());
						return response;
					});
					return cached || fetchPromise;
				})
			)
		);
		return;
	}

	// Other static assets: cache-first
	event.respondWith(
		caches.match(request).then((cached) => cached || fetch(request))
	);
});
