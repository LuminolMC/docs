import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./index.css";

import Ads from "./Ads.vue";
import Language from "./Language.vue";
import Layout from "./Layout.vue";

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(Layout);
  },
};
