import Vue from 'vue'
import VueCountdownTimer from 'vuejs-countdown-timer'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {store} from "./_store/index"
Vue.config.productionTip = false
Vue.use(VueCountdownTimer)
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
