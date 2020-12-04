module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
  	name: 'Jobhun Service App',
  	themeColor: "#42b983",
    msTileColor: "#42b983",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#42b983"
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'public/service-worker.js',
        // ...other Workbox options...
    }
  }
}