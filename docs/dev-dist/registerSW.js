if('serviceWorker' in navigator) navigator.serviceWorker.register('/awesome-node/dev-sw.js?dev-sw', { scope: '/awesome-node/', type: 'classic' })