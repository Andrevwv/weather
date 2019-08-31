import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const base = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5"
});

Vue.prototype.$http = base;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
