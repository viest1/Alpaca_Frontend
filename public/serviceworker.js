const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];
//
// eslint-disable-next-line @typescript-eslint/no-this-alias,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-this-alias
const self = this;
//
// Install SW

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match('offline.html'));
    })
  );
});

// Activate the SW

self.addEventListener('activate', (e) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        // eslint-disable-next-line array-callback-return,consistent-return
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Academind Version

// const CACHE_STATIC_NAME = 'static-v15';
// const CACHE_DYNAMIC_NAME = 'dynamic-v2';
// const STATIC_FILES = [
//   '/',
//   '/index.html',
//   '/offline.html',
//   '/src/js/app.js',
//   '/src/js/feed.js',
//   '/src/js/promise.js',
//   '/src/js/fetch.js',
//   '/src/js/material.min.js',
//   '/src/css/app.css',
//   '/src/css/feed.css',
//   '/src/images/main-image.jpg',
//   'https://fonts.googleapis.com/css?family=Roboto:400,700',
//   'https://fonts.googleapis.com/icon?family=Material+Icons',
//   'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
// ];
//
// // function trimCache(cacheName, maxItems) {
// //   caches.open(cacheName)
// //     .then(function (cache) {
// //       return cache.keys()
// //         .then(function (keys) {
// //           if (keys.length > maxItems) {
// //             cache.delete(keys[0])
// //               .then(trimCache(cacheName, maxItems));
// //           }
// //         });
// //     })
// // }
//
// self.addEventListener('install', function (event) {
//   console.log('[Service Worker] Installing Service Worker ...', event);
//   event.waitUntil(
//     caches.open(CACHE_STATIC_NAME).then(function (cache) {
//       console.log('[Service Worker] Precaching App Shell');
//       cache.addAll(STATIC_FILES);
//     })
//   );
// });
//
// self.addEventListener('activate', function (event) {
//   console.log('[Service Worker] Activating Service Worker ....', event);
//   event.waitUntil(
//     caches.keys().then(function (keyList) {
//       return Promise.all(
//         // eslint-disable-next-line array-callback-return,consistent-return
//         keyList.map(function (key) {
//           if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
//             console.log('[Service Worker] Removing old cache.', key);
//             return caches.delete(key);
//           }
//         })
//       );
//     })
//   );
//   return self.clients.claim();
// });
//
// function isInArray(string, array) {
//   let cachePath;
//   if (string.indexOf(self.origin) === 0) {
//     // request targets domain where we serve the page from (i.e. NOT a CDN)
//     console.log('matched ', string);
//     cachePath = string.substring(self.origin.length); // take the part of the URL AFTER the domain (e.g. after localhost:8080)
//   } else {
//     cachePath = string; // store the full request (for CDNs)
//   }
//   return array.indexOf(cachePath) > -1;
// }
//
// self.addEventListener('fetch', function (event) {
//   const url = 'https://httpbin.org/get';
//   if (event.request.url.indexOf(url) > -1) {
//     event.respondWith(
//       caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
//         return fetch(event.request).then(function (res) {
//           // trimCache(CACHE_DYNAMIC_NAME, 3);
//           cache.put(event.request, res.clone());
//           return res;
//         });
//       })
//     );
//   } else if (isInArray(event.request.url, STATIC_FILES)) {
//     event.respondWith(caches.match(event.request));
//   } else {
//     event.respondWith(
//       caches.match(event.request).then(function (response) {
//         if (response) {
//           return response;
//         }
//         return fetch(event.request)
//           .then(function (res) {
//             return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
//               // trimCache(CACHE_DYNAMIC_NAME, 3);
//               cache.put(event.request.url, res.clone());
//               return res;
//             });
//           })
//           .catch(function () {
//             // eslint-disable-next-line consistent-return
//             return caches.open(CACHE_STATIC_NAME).then(function (cache) {
//               if (event.request.headers.get('accept').includes('text/html')) {
//                 return cache.match('/offline.html');
//               }
//             });
//           });
//       })
//     );
//   }
// });

// Until Here

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(function(res) {
//               return caches.open(CACHE_DYNAMIC_NAME)
//                 .then(function(cache) {
//                   cache.put(event.request.url, res.clone());
//                   return res;
//                 })
//             })
//             .catch(function(err) {
//               return caches.open(CACHE_STATIC_NAME)
//                 .then(function(cache) {
//                   return cache.match('/offline.html');
//                 });
//             });
//         }
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     fetch(event.request)
//       .then(function(res) {
//         return caches.open(CACHE_DYNAMIC_NAME)
//                 .then(function(cache) {
//                   cache.put(event.request.url, res.clone());
//                   return res;
//                 })
//       })
//       .catch(function(err) {
//         return caches.match(event.request);
//       })
//   );
// });

// Cache-only
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request)
//   );
// });

// Network-only
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     fetch(event.request)
//   );
// });
