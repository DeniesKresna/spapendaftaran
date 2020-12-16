const fs = require('fs')

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
  },
  devServer: {
    disableHostCheck: true,
    
    https: {
          key: fs.readFileSync('./certs/kantor/key.pem'),
          cert: fs.readFileSync('./certs/kantor/cert.pem'),
        },
    
    port: 3000,
    //public: "cobadenies.loca.lt",
    //host: "localhost"
    //office
    public: 'https://10.100.100.115:3000/'
    
    //home
    //public: 'https://cobadenies.loca.lt/'
  },
}