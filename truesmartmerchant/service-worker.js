var dataCacheName = 'emojimon-recall-v1';
var cacheName = 'recall-1';
var filesToCache = [
  '',
  'index.html',
  'assets/script/main.js',
  'assets/script/vegas.min.js',
  'assets/script/waypoints.min.js',
  'assets/style/main.css',
  'assets/style/true.css',
  'assets/style/vegas.min.css',
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
