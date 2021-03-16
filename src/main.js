import Vue from "vue";
import App from "./App.vue";
import api from './api.js';
import myAjax from './ajaxRequest.js';

//Mixins
Vue.mixin(myAjax);
Vue.mixin(api);

//import element library
import ElementUI from "element-ui";
Vue.use(ElementUI);

//import search component
import salary from "./components/salary/salary.vue";
Vue.component("salary", salary);

new Vue({
  el: "#app",
  render: h => h(App)
});
