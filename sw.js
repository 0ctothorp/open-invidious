self.addEventListener("install", (event) => {});

self.addEventListener("activate", (event) => {});

self.addEventListener("fetch", (event) => {
  if (event.request.method != "GET") return;

  const promise = fetch(event.request);

  event.respondWith(promise);
});
