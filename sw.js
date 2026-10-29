// Service worker minimal : l'app fonctionne hors-ligne après la première visite (le fond de plan a besoin d'internet).
const CACHE = "vroum-v3";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-180.png",
  "vendor/leaflet/leaflet.js", "vendor/leaflet/leaflet.css",
  "fonts/Inter-Regular.woff2", "fonts/Inter-SemiBold.woff2", "fonts/Inter-Bold.woff2", "fonts/Inter-ExtraBold.woff2"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
// Réseau d'abord (toujours la dernière version), cache en secours hors-ligne.
// Les requêtes vers d'autres domaines (tuiles de la carte, itinéraires) ne sont jamais mises en cache.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request))
  );
});
