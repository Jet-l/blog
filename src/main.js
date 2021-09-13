import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "highlight.js/styles/github.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { VueShowdown } from "vue-showdown";
import "github-markdown-css/github-markdown.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueShowdown);

new Vue({
  router,
  store,
  render: (h) => h(App),
  created: initBlog,
}).$mount("#app");

function initBlog() {
  store.dispatch("getBlogInfo");
}
