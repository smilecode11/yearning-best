import App from './App'
// import i18n from './lang/i18n'

import Vue from 'vue'
import uView from "uview-ui";
Vue.config.productionTip = false
Vue.use(uView);
uni.$u.config.unit = 'rpx'

App.mpType = 'app'

const app = new Vue({
	// i18n,
	...App
})
app.$mount()