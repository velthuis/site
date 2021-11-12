const resource = [ /* --- CSS --- */ '/site/assets/css/style.css', /* --- JavaScripts --- */ '/site/assets/js/dist/home.min.js', '/site/assets/js/dist/page.min.js', '/site/assets/js/dist/post.min.js', '/site/assets/js/dist/categories.min.js', '/site/assets/js/data/search.json', '/site/app.js', '/site/sw.js', /* --- HTML --- */ '/site/index.html', '/site/404.html', '/site/categories/', '/site/tags/', '/site/archives/', '/site/about/', /* --- Favicons --- */ '/site/assets/img/favicons/android-chrome-192x192.png', '/site/assets/img/favicons/android-chrome-512x512.png', '/site/assets/img/favicons/apple-touch-icon.png', '/site/assets/img/favicons/favicon-16x16.png', '/site/assets/img/favicons/favicon-32x32.png', '/site/assets/img/favicons/favicon.ico', '/site/assets/img/favicons/mstile-150x150.png', '/site/assets/img/favicons/site.webmanifest', '/site/assets/img/favicons/browserconfig.xml' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'velthuis.github.io', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
