<!--
 * @Author: xu.yanyan
 * @Date: 2021-01-22 14:28:42
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-01-26 10:07:29
 * @Description: file content
-->
<template>
  <div>
    <a
      :href="'#' + item.path"
      target="_blank"
      v-for="(item, index) in routesList"
      :key="index"
    >
      <span v-if="item.meta && item.meta.title">{{ item.meta.title }}</span>
      <span v-else>{{ item.path }}</span>
    </a>
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
