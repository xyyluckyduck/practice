<!--
 * @Author: xu.yanyan
 * @Date: 2021-01-22 14:28:42
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-04-15 09:29:17
 * @Description: file content
-->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in routesList" :key="index">
        <a :href="'#' + item.path" target="_blank">
          <span v-if="item.meta && item.meta.title">{{ item.meta.title }}</span>
          <span v-else>{{ item.path }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from "./router";

export default {
  data() {
    return {
      routesList: []
    };
  },
  mounted() {
    this.routesList = routes;
    console.log(this.routesList);
  }
};
</script>

<style lang="scss" scoped></style>
