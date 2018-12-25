const staticAssets = [
    '../*',
    '../assets/*',
];

self.addEventListener('install', function(event) {
    const cache = caches.open('homestatic');
    cache.addAll(staticAssets);
})