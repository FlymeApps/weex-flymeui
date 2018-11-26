<template recyclable>
  <div class="container">
    <text>asdasd</text>
    <text>{{ this.checking }}</text>
    <!-- <check-icon :show="true" :checked="true"></check-icon> -->
  </div>
</template>

<style scoped>
  .container {
    margin-bottom: 20px;
    padding: 20px;
    height: 250px;
    background-color: #EEE;
    color: #AAA;
    font-size: 50px;
    text-align: center;
  }
</style>

<script>
// import { CheckIcon } from '../../../index';
export default {
  // components: { CheckIcon },
  props: {
    checking: Boolean,
    check: Boolean
  }
};
</script>
