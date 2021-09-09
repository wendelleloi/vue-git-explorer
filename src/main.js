import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Paginate from "vuejs-paginate";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import { domain, clientId, audience } from "../auth_config.json";
import { Auth0Plugin } from "@/auth/auth0-plugin";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("paginate", Paginate);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
