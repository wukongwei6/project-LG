import Vue from "vue";
import App from "./App.vue";
import typeNav from "./components/typeNav";
import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";
import router from "@/router";
import { MessageBox } from "element-ui";
import VueLazyload from "vue-lazyload";
import lazy from "@/assets/lazy.jpeg";

Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
// Vue.component(messageBox.name, messageBox);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import store from "@/store";
import "@/mock/mockServe";
import "swiper/css/swiper.css";
import * as API from "@/api";
import "@/plugins/validate";
Vue.use(VueLazyload, {
  loading: lazy,
});

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount("#app");
