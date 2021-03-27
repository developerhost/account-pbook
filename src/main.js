import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記

Vue.config.productionTip = false

Vue.use(VueAxios, axios) //追記

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCYJfNnxnsjKlQeoj7_Lh6qSh_-v7j8VTM",
    authDomain: "account-pbook.firebaseapp.com",
    projectId: "account-pbook",
    storageBucket: "account-pbook.appspot.com",
    messagingSenderId: "795086205807",
    appId: "1:795086205807:web:924c790f4a0a998383ae9a",
    measurementId: "G-8VJG0TR5EC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
