import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./vuex/index"
import FastClick from "fastclick"
// import { popup_plugin } from "./plugins/popup"

// if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', function() {
//         FastClick.attach(document.body);
//     }, false);
// }

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
//   components: { popup_plugin }
}).$mount('#app')
