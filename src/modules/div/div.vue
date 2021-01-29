<!--
 * @Author: xu.yanyan
 * @Date: 2021-01-22 13:57:23
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-01-28 16:48:49
 * @Description: file content
-->
<template>
  <div class="content">
    <circle-loading></circle-loading>
  </div>
</template>

<script>
import CircleLoading from "./component/circle-loading";

export default {
  components: {
    CircleLoading
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  background-color: rgba(250, 215, 215, 0.883);
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}
.content > div {
  transform: scale(1.5);
}
</style>
