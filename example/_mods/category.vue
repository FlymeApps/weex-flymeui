<template>
  <div class="category">
    <text class="category-text">{{title}}</text>
  </div>
</template>

<style scoped>
    .category {
      margin-top: 30px;
      padding-left: 36px;
      width: 1080px;
      height: 102px;
      background-color: #198ded;
      justify-content: center;
    }

    .category-text {
      color: #fff;
      font-weight: 600;
      font-size: 42px;
    }
</style>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
