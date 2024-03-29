import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import api from './api/api'
import {Notification} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$notify = Notification
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
