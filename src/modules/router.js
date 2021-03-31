/*
 * @Author: xu.yanyan
 * @Date: 2021-01-22 11:19:40
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-01-28 16:49:33
 * @Description: 统一加载模块路由信息
 */

const routes = [];

/**
 * 获取模块目录上下文，获得的是一个方法
 * webpackContext(req) {
 *  return __webpack_require__(webpackContextResolve(req))
 * }
 * 这个方法又 return 一个 __webpack_require__，这个 __webpack_require__ 就相当于 require 或者 import
 * 同时，webpackContext 还有两个静态方法 keys 与 resolve，一个 id 属性
 */
const modulesFiles = require.context("./", true, /\.router\.js$/);

// 注册路由模块
function registerRoute(route) {
  routes.push(route);
}

// 统一加载路由信息
// keys 静态方法： 返回匹配成功模块的名字组成的数组
modulesFiles.keys().forEach(modulePath => {
  const value = modulesFiles(modulePath);
  if (value.default instanceof Array) {
    value.default.forEach(registerRoute);
  } else {
    registerRoute(value.default);
  }
});

export default routes;
