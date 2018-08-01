import Vue from 'vue'
import App from './App'

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App data-names="Bob, Alice, Peter, Dora" />'
})
