/*
 * @Author: xu.yanyan
 * @Date: 2021-01-22 11:03:14
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-01-22 11:14:30
 * @Description: file content,
 */
module.exports = {
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/
  publicPath: "./",
  // 构建路径，默认是 dist
  outputDir: process.env.VUE_APP_ID,
  // 所有 webpack-dev-server 的选项都支持
  devServer: {
    open: true,
    port: 9999,
    proxy: {
      "/dev/": {
        target: "http://localhost:3333/mock/27/hsa",
        changeOrigin: true,
        pathRewrite: {
          "^/dev": ""
        }
      }
    }
  }
};
