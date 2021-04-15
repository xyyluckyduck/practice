<!--
 * @Author: xu.yanyan
 * @Date: 2021-04-15 09:21:48
 * @LastEditors: xu.yanyan
 * @LastEditTime: 2021-04-15 14:28:21
 * @Description: file content
-->
<template>
  <div class="box-example">
    <div class="box__wrapper">
      <div class="item">
        <div class="des">x,y 轴偏移</div>
        <div class="box-shadow shadow1"></div>
        <span class="em">box-shadow</span>: 20px 20px red;
      </div>
      <div class="item">
        <div class="des">逗号分隔，顺序叠加</div>
        <div class="box-shadow shadow2"></div>
        <span class="em">box-shadow</span>: 20px 20px 0px red, 20px 20px 10px
        blue;
      </div>
      <div class="item">
        <div class="des">圆角阴影</div>
        <div class="box-shadow shadow3"></div>
        <span class="em">box-shadow</span>: 20px 20px 20px 5px red;
      </div>
      <div class="item">
        <div class="des">内阴影</div>
        <div class="box-shadow shadow4"></div>
        <span class="em">box-shadow</span>: 20px 20px 2px red inset;
      </div>
      <div class="item">
        <div class="box-shadow shadow5 text-des">blur: 0px</div>
      </div>
      <div class="item">
        <div class="box-shadow shadow6 text-des">blur: 20px</div>
      </div>
      <div class="item">
        <div class="box-shadow shadow7 text-des">blur: 40px</div>
      </div>
      <div class="item">
        <div class="box-shadow shadow8 text-des">spread: 0px</div>
      </div>
      <div class="item">
        <div class="box-shadow shadow9 text-des">spread: 10px</div>
      </div>
      <div class="item">
        <div class="box-shadow shadow10 text-des">spread: 20px</div>
      </div>
      <div class="item">
        <div class="box-shadow shadow11"></div>
        <span class="em">box-shadow</span>: 40px 40px 20px 10px red;
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box-example {
  width: 100%;
  height: 500px;
}
.box__wrapper {
  margin: 40px;
  .item {
    display: inline-block;
    margin-right: 40px;
    margin-bottom: 40px;
    width: 320px;
  }
}
.des {
  margin-bottom: 10px;
  color: blueviolet;
  font-weight: bold;
  font-size: 18px;
}
.em {
  color: rgb(231, 3, 3);
}
.box-shadow {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  margin-bottom: 40px;
  &.shadow1 {
    box-shadow: 20px 20px red;
  }
  &.shadow2 {
    box-shadow: 20px 20px 0px red, 20px 20px 10px blue;
  }
  &.shadow3 {
    border-radius: 30px;
    box-shadow: 20px 20px 20px 5px red;
  }
  &.shadow4 {
    box-shadow: 20px 20px 2px red inset;
  }
  &.text-des {
    text-align: center;
    line-height: 100px;
    font-size: 12px;
    font-weight: bold;
    background-color: cornsilk;
  }
  &.shadow5 {
    box-shadow: 140px 0 0 red;
  }
  &.shadow6 {
    box-shadow: 140px 0 20px red;
  }
  &.shadow7 {
    box-shadow: 140px 0 40px red;
  }
  &.shadow8 {
    box-shadow: 0 0 0 0 red;
  }
  &.shadow9 {
    box-shadow: 0 0 0 10px red;
  }
  &.shadow10 {
    box-shadow: 0 0 0 20px red;
  }
  &.shadow11 {
    box-shadow: 40px 40px 20px 10px red;
    margin-bottom: 80px;
  }
}
</style>
