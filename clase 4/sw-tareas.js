const CACHE_NAME = "tareas-app-1.0";

self.addEventListener('install', event => {
    console.log("Service Worker: Proceso de instalacion en proceso");

    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                '/index.html',
                '/assets/css/style.css',
                '/assets/js/main.js',
                '/assets/image/icon.png'
            ]);
        }).then(() => {
            console.log("Service Worker: Proceso de instalacion completo");
        }).catch(error => console.error(error))

    )
})


self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(CACHE_NAME)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request)
            }).catch(error => console.log(error))
    )
})

