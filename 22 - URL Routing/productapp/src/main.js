import Vue from 'vue'
import App from './App.vue'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RestDataSource } from "./restDataSource";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    eventBus: new Vue()
  },  
  store,
  router,
  provide: function () {
      return {
          eventBus: this.eventBus,
          restDataSource: new RestDataSource(this.eventBus)
      }
  }
}).$mount('#app')
