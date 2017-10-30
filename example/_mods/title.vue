<template>
  <div class="wxc-title">
    <image class="logo" src="http://design.flyme.cn/book/images/Flyme_logo.png"></image>
    <text class="text">{{title}}</text>
  </div>
</template>

<style scoped>
  .wxc-title {
    margin-top: 10px;
    margin-left: 10px;
    flex-direction: row;
    align-items: center;
  }

  .logo {
    width: 60px;
    height: 60px;
    margin-left: 10px;
  }

  .text {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }

</style>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
