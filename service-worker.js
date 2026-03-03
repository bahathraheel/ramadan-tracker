const CACHE_NAME = "ramadan-tracker-v2";

const urlsToCache = [
  "/ramadan-tracker/",
  "/ramadan-tracker/index.html",
  "/ramadan-tracker/manifest.json",
  "/ramadan-tracker/icon-192.png",
  "/ramadan-tracker/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
