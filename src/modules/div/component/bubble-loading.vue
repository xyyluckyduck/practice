<!--
 * @Author: xu.yanyan
 * @Date: 2021-03-01 13:49:20
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-03-15 12:34:00
 * @Description: file content
-->
<template>
  <div class="bubble-loading">20%</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bubble-loading {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(45deg, rgb(14, 14, 46), rgb(64, 64, 117));
  border-radius: 100%;
  color: white;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;
}
.bubble-loading::before,
.bubble-loading::after {
  content: "";
  background: rgb(51, 149, 230);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 50%;
  margin-left: -20px;
  margin-top: -20px;
  transform: translateY(-2px);
}
.bubble-loading::before {
  animation: rotate2 infinite 3s linear;
}
.bubble-loading::after {
  animation: rotate2 infinite 2s linear;
}
@keyframes rotate2 {
  0% {
    transform: rotate(0deg) translateY(-2px);
  }
  100% {
    transform: rotate(360deg) translateY(-2px);
  }
}
</style>
