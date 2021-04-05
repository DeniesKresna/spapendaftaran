import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import api from './plugins/api';
import './registerServiceWorker';

import firebase from "firebase/app";
// import 'firebase/messaging';



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  api,
  render: h => h(App)
}).$mount('#app')
