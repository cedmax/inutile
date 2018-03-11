/* global skipWaiting clients,  */
const cacheName = 'files'
const offlinePage = '/index.html'

addEventListener('install', installEvent => {
  skipWaiting()
  installEvent.waitUntil(
    caches
      .open(cacheName)
      .then(cache => cache.add(offlinePage))
  )
})

addEventListener('activate', () => clients.claim())

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request
  if (request.method !== 'GET') {
    return
  }

  fetchEvent.respondWith(async function respond () {
    const responseFromFetch = fetch(request)

    fetchEvent.waitUntil(async function saveInCache () {
      const responseCopy = (await responseFromFetch).clone()
      const myCache = await caches.open(cacheName)
      await myCache.put(request, responseCopy)
    }())

    if (request.headers.get('Accept').includes('text/html')) {
      try {
        return await responseFromFetch
      } catch (error) {
        const responseFromCache = await caches.match(request)
        return responseFromCache || caches.match(offlinePage)
      }
    } else {
      const responseFromCache = await caches.match(request)
      return responseFromCache || responseFromFetch
    }
  }())
})
