<template>
  <div class="category">
    <text class="category-text">{{title}}</text>
  </div>
</template>

<style scoped>
  .category {
    margin-top: 10px;
    padding-left: 12px;
    width: 360px;
    height: 34px;
    background-color: #198ded;
    justify-content: center;
  }

  .category-text {
    color: #fff;
    font-weight: 600;
    font-size: 14px;
  }

</style>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
