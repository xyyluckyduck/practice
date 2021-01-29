<!--
 * @Author: xu.yanyan
 * @Date: 2021-01-26 13:47:39
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-01-29 10:13:28
 * @Description: file content
-->
<template>
  <div class="circle-loading">20%</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.circle-loading {
  width: 40px;
  height: 40px;
  border: 4px solid rgb(184, 187, 191);
  border-radius: 100%;
  font-size: 12px;
  font-weight: bold;
  color: rgb(172, 28, 177);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;
}

.circle-loading::before {
  content: "";
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 4px solid transparent;
  border-top-color: rgb(172, 28, 191);
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -24px;
  margin-top: -24px;
  animation: rotate1 infinite 2s ease;
}

@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
