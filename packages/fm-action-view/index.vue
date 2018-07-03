<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created and Updated by Yanjiie on 2018/03/13. -->
<template>
	<Fmactiveview v-if="!isWeb" :act="act"></Fmactiveview>
</template>
<script>
export default {
  name: 'FmActionView',
  props: {
    act: String
  }
};
</script>


