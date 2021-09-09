import "!style-loader!css-loader!sass-loader!./scss-loader.scss";
import { configure } from "@storybook/vue";

import Vue from "vue";
import Paginate from "vuejs-paginate";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("paginate", Paginate);

function loadStories() {
  const req = require.context("../src/stories", true, /\.stories\.js$/);

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
