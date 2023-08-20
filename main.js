import App from "./App";
// import i18n from './lang/i18n'

import QQMapWX from "@/utils/libs/qqmap/qqmap-wx-jssdk.js";
let qqmap = new QQMapWX({
  key: "G3OBZ-AR7KU-5YGVN-GPNWS-S3U7F-KWFWJ",
});

Vue.prototype.$qqmap = qqmap;

import Vue from "vue";
import uView from "uview-ui";
Vue.config.productionTip = false;
Vue.use(uView);
uni.$u.config.unit = "rpx";

App.mpType = "app";

const app = new Vue({
  // i18n,
  ...App,
});
app.$mount();
