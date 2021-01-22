/*
 * @Author: xu.yanyan
 * @Date: 2021-01-21 14:26:53
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-01-22 15:04:34
 * @Description: file content
 */
import Vue from "vue";
import VueRouter from "vue-router";
import modulesRoutes from "@/modules/router.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/modules/home.vue")
  }
];

// 模块的路由信息
routes.push(...modulesRoutes);

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
