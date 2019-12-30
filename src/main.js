import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from "./router";

var url = 'http://localhost:3000';
axios.get(url+'/product').then(function (res) {
  window.console.log(res,'回复')
}).catch(function (error) {
  window.console.log(error,'错误')
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router:router,
  component:{App}
}).$mount('#app')
