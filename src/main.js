/*
 * @Author: xu.yanyan
 * @Date: 2021-01-21 14:26:53
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-01-22 14:27:34
 * @Description: file content
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 阻止显示生产模式的消息
// 如果没有这行代码，或者设置为true，控制台就会多出这么一段代码。
// You are running Vue in development mode.
// Make sure to turn on production mode when deploying for production.
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
