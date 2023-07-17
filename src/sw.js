const cacheName = "site-static-v1";
const assets = [
  "/assets/index.8a356a4a.css",
  "/assets/index.a3ed843c.js",
  "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => {cache.addAll(assets);})
  )
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== cacheName)
        .map(key => caches.delete(key))
    ))
  )
});

self.addEventListener("fetch", e => {
  const { request } = e;
  if (request.method === "POST") return;
  return e.respondWith(caches.match(request).then(res => res || fetch(request)));
});