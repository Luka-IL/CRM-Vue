import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyC5EBqwkPJtJ45RvvjLfZ_6GdgdJo8Wyiw",
  authDomain: "crm-vue-luka.firebaseapp.com",
  databaseURL: "https://crm-vue-luka.firebaseio.com",
  projectId: "crm-vue-luka",
  storageBucket: "crm-vue-luka.appspot.com",
  messagingSenderId: "99686768759",
  appId: "1:99686768759:web:8ef224aa0c700782482672",
  measurementId: "G-B2X53DCREP"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  }
})



