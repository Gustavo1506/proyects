import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import 'bootstrap'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
