<template>
  <div class="wxc-title">
    <image class="logo" src="http://design.flyme.cn/book/images/Flyme_logo.png"></image>
    <text class="text">{{title}}</text>
  </div>
</template>

<style scoped>
  .wxc-title {
    margin-top: 20px;
    margin-left: 20px;
    flex-direction: row;
    align-items: center;
  }

  .logo {
    width: 120px;
    height: 120px;
    margin-left: 20px;
  }

  .text {
    margin-left: 20px;
    font-size: 30px;
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
