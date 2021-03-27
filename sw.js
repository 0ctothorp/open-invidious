self.addEventListener("install", (event) => {});

self.addEventListener("activate", (event) => {});

self.addEventListener("fetch", (event) => {
  if (event.request.method != "GET") return;

  event.respondWith(async () => {
    return fetch(event.request);
  });
});
