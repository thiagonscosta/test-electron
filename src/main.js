import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
// import VCalendar from 'v-calendar'
import './styles/sass/app.scss'

Vue.use(BootstrapVue)
// Vue.use(VCalendar, { componentPrefix: 'vc' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
