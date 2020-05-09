import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import VueCountdownTimer from 'vuejs-countdown-timer'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib'
import {store} from "./_store/index"
Vue.config.productionTip = false
Vue.use(VueCountdownTimer)
Vue.use(Vuetify)
new Vue({
  store,
  vuetify,
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  render: h => h(App)
}).$mount('#app')
