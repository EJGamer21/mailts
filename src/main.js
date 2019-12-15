import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import db from './database/firebaseInit'
import buefy from 'buefy'
import 'buefy/dist/buefy.css'
import swal from 'sweetalert'

Vue.config.productionTip = false

Vue.use(db)
Vue.use(buefy)
Vue.prototype.$swal = swal

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
