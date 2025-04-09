self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('static-v1').then(cache => {
        return cache.addAll([
          '/',
          '/splash-screen.png',
          '/icon-192.png',
          '/icon-512.png'
        ])
      })
    )
    self.skipWaiting()
  })
  
  self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
  })
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request)
      })
    )
  })
  