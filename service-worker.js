// service-worker.js

const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.add(OFFLINE_URL);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // Retorna a resposta do cache se estiver disponível
            if (response) {
                return response;
            }

            // Senão, redireciona para a página offline
            return fetch(event.request).catch(function () {
                return caches.match(OFFLINE_URL);
            });
        })
    );
});
