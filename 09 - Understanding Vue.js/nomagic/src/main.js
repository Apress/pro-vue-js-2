require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

import Vue from "vue";
import MyComponent from "./App";

new Vue({
    el: "#app",
    components: { "custom": MyComponent },
    template: "<custom />"
});
