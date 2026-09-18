'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5e3d4c31fa07f3cea8e33b38ef92eca9",
"version.json": "0d7481219a787910ec584f93b6ab77a6",
"index.html": "ac92312114231ad08f45c841cb1d45fb",
"/": "ac92312114231ad08f45c841cb1d45fb",
"main.dart.js": "785d5956a32801365926a5b98ddde66f",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "45c80eb7a27b7c64ac955a303c07282d",
"icons/Icon-192.png": "4c9d763decde3e1b4ec04a9dafc31602",
"icons/Icon-maskable-192.png": "4c9d763decde3e1b4ec04a9dafc31602",
"icons/Icon-maskable-512.png": "5b62441ba85b2e134b207751802357c6",
"icons/Icon-512.png": "5b62441ba85b2e134b207751802357c6",
"manifest.json": "c2da190176f74dd872e66ace93e4715b",
"assets/NOTICES": "2a05e0d4b13ef99c7d874001f5e35147",
"assets/FontManifest.json": "78a7223b15729ded03caa36c680bf0da",
"assets/AssetManifest.bin.json": "f157bc353b2599eff22abd375819c909",
"assets/packages/flutter_local_notifications_web/web/notifications_service_worker.js": "087634de8a8c1c49d00bcd212bf7feb4",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "35cb545ac1f9eaa6ee914f62cd82249f",
"assets/fonts/MaterialIcons-Regular.otf": "4c2b736a8c2b8ccac89eef1d0e650275",
"assets/assets/calendar/car.png": "2b571b140e1a2bb3e002b796a0d614a5",
"assets/assets/calendar/finish.png": "cf48130b373d16589834cd88b4bc1ece",
"assets/assets/error_car.png": "b28abb56634228d5ff9c2b1caa3a23fb",
"assets/assets/circuits/monza.png": "5316d8754f87d089abc5bc3b35812ce3",
"assets/assets/circuits/silverstone.png": "71770aaf7c29c8238458691c33e93924",
"assets/assets/circuits/shanghai.png": "7867b71379a178356de47db6ba3d1220",
"assets/assets/circuits/albert_park.png": "a72f3c836d7eb6f1741d9d1b5dc73ac4",
"assets/assets/circuits/suzuka.png": "95758dc53020f6fee3b1715ceb50a511",
"assets/assets/circuits/rodriguez.png": "f79b5c1d8ab42dae0074e84647d556b4",
"assets/assets/circuits/monaco.png": "e3f1cbc6073180148a5adaf665aaaf73",
"assets/assets/circuits/red_bull_ring.png": "c19c73e382d4e95e7c30131fde0aa618",
"assets/assets/circuits/imola.png": "31b8f930f36298b5399eeb575efb4093",
"assets/assets/circuits/catalunya.png": "4534d878b2d3afc69fa9e7e5a8f841d9",
"assets/assets/circuits/villeneuve.png": "35985486c2126738f30d96d1a82eca32",
"assets/assets/circuits/spa.png": "3a71e22b5b3421698d40aa7e5529074c",
"assets/assets/circuits/baku.png": "14e60556c4533e77f35ce595b0534eb4",
"assets/assets/circuits/vegas.png": "e24a04767d15d359bce79fe25e820fb5",
"assets/assets/circuits/jeddah.png": "0f06cd8e93212e6aa7ef79ceea9484c5",
"assets/assets/circuits/bahrain.png": "d67fc904d0bfe76d4e8875085888f3a4",
"assets/assets/circuits/yas_marina.png": "f5202574ae5075ddb22f86e48d3e7e6c",
"assets/assets/circuits/americas.png": "378352b5da30aed6603fa83e935b1833",
"assets/assets/circuits/zandvoort.png": "0a43685912f9662ca63d98c872f769f7",
"assets/assets/circuits/miami.png": "a3a3580aa2ddb33ce48122f0f6f01737",
"assets/assets/circuits/marina_bay.png": "0215aa2d93e8afb4a8e2fd789e6a2a23",
"assets/assets/circuits/interlagos.png": "0a7067ab44ea31113cd58045d9b6b1d9",
"assets/assets/circuits/losail.png": "4b9d8ae80daf5af0c7c6c18c7800b8b6",
"assets/assets/circuits/hungaroring.png": "ac7b42ceea640f4cf6d09b27d35f8f16",
"assets/assets/nav_bar/trophy.png": "a8cdfdd9848e52a54b4dadc7b8f35a9c",
"assets/assets/nav_bar/home.png": "d212dcc5d5c708e09de6e28d2a74d7e8",
"assets/assets/nav_bar/lights.png": "39d1eddae504594b903be58193b3fee0",
"assets/assets/nav_bar/helmet.png": "ff3bffb727f2c61d878c288dd7df8ee9",
"assets/assets/nav_bar/racing-car.png": "e5bc68dcf39625fc33f5313f21f0e3b0",
"assets/assets/icons/pin_red.png": "c1c1b4f808f51c9ac364523fccd48051",
"assets/assets/icons/pin_unselected.png": "b7c8cfe89e9fb45616cfed8a19615f21",
"assets/assets/icons/location_user.png": "6dfe64a37e83a7ab4e3431a6cda5b358",
"assets/assets/app_logo.png": "61e376f8e21b060953953ad6c1eeca73",
"assets/assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/assets/fonts/HelveticaNeueCyr-Bold.ttf": "c66bdb3802268e0f1b37e7fb32857613",
"assets/assets/data/circuit_stats.json": "67d7add07d474a1f47dc35e64148c061",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
