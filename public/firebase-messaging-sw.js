importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');
/*
const firebase = require('firebase/app');
require('firebase/messaging');
*/
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