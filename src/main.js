//importaciones
import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import 'firebase/analytics'
import './registerServiceWorker'

//paramtros de firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkYV4JcFmwUboa-pyEby14RsQvnHbXjWE",
  authDomain: "orden-app-ac0af.firebaseapp.com",
  databaseURL: "https://orden-app-ac0af-default-rtdb.firebaseio.com",
  projectId: "orden-app-ac0af",
  storageBucket: "orden-app-ac0af.appspot.com",
  messagingSenderId: "1047065828173",
  appId: "1:1047065828173:web:7d990191668fea01c2f504",
  measurementId: "G-BYG3WQNHD0"
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.firestore().settings({ timestampInSnapshots: true })


//variables de firebase y vue
var db = firebase.firestore();
var usuarios=[];
db.collection("Usuarios").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      var   usuario ={
        nombre:doc.data().Nombre,
        cedula:doc.data().Cedula,
        telefono:doc.data().Telefono,
        correo:doc.data().Correo,

      }
      usuarios.push(usuario);
  });
});
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)


export {usuarios, db}
new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
