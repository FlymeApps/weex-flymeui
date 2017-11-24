<template>
  <div class="category">
    <text class="category-text">{{title}}</text>
  </div>
</template>

<style lang="sass" scoped>
    @import "../../packages/style/mixin.scss";
    .category {
      margin-top: size(30);
      padding-left: size(36);
      width: size(1080);
      height: size(102);
      background-color: #198ded;
      justify-content: center;
    }

    .category-text {
      color: #fff;
      font-weight: 600;
      font-size: size(42);
    }
</style>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
