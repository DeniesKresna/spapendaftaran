import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import api from './plugins/api';
import './registerServiceWorker';

import firebase from "firebase/app";
import 'firebase/messaging';

firebase.initializeApp({
	apiKey: "AIzaSyB-pWdwaKoiRubx364ZLbDjGXlix6wFzmA",
    authDomain: "siaone-381eb.firebaseapp.com",
    databaseURL: "https://siaone-381eb.firebaseio.com",
    projectId: "siaone-381eb",
    storageBucket: "siaone-381eb.appspot.com",
    messagingSenderId: "270304129346",
    appId: "1:270304129346:web:a3091d97acd9710b4b18db"
});

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BEI0iVNmLB0C87-7bitWCiMD5PVfqf_ISQ6Hmb3xCc2C9CJWCNP4VYFlMF-2j6QsA36zCtplcZvsisdIp1l99rU"); // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token)
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  api,
  render: h => h(App)
}).$mount('#app')
