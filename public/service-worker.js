/* global skipWaiting clients,  */
const cacheName = 'assets'
const offlinePage = '/offline.html'

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

    if (request.headers.get('Accept').includes('text/html')) {
      try {
        return await responseFromFetch
      } catch (error) {
        return caches.match(offlinePage)
      }
    } else {
      fetchEvent.waitUntil(async function saveInCache () {
        const responseCopy = (await responseFromFetch).clone()
        const myCache = await caches.open(cacheName)
        await myCache.put(request, responseCopy)
      }())

      const responseFromCache = await caches.match(request)
      return responseFromCache || responseFromFetch
    }
  }())
})
