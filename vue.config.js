const fs = require('fs')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
  	name: 'Jobhun Service App',
  	themeColor: "#48B391",
    msTileColor: "#48B391",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#48B391"
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'public/service-worker.js',
        // ...other Workbox options...
    }
  },
  
}