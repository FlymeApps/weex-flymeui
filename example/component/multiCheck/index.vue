<template>
  <div>
    <fm-multi-check-group class="check-group">
      <fm-multi-check-cell identity="a"></fm-multi-check-cell>
      <fm-multi-check-cell identity="b"></fm-multi-check-cell>
      <fm-multi-check-cell identity="c"></fm-multi-check-cell>
      <fm-multi-check-cell identity="d"></fm-multi-check-cell>
      <fm-multi-check-cell identity="e"></fm-multi-check-cell>
      <fm-multi-check-cell identity="f"></fm-multi-check-cell>
      <fm-multi-check-cell identity="g"></fm-multi-check-cell>
      <fm-multi-check-cell identity="h"></fm-multi-check-cell>
      <fm-multi-check-cell identity="i"></fm-multi-check-cell>
      <fm-multi-check-cell identity="j"></fm-multi-check-cell>
      <fm-multi-check-cell identity="k"></fm-multi-check-cell>
      <fm-multi-check-cell identity="l"></fm-multi-check-cell>
      <fm-multi-check-cell identity="m"></fm-multi-check-cell>
      <fm-multi-check-cell identity="n"></fm-multi-check-cell>
      <fm-multi-check-cell identity="o"></fm-multi-check-cell>
      <fm-multi-check-cell identity="p"></fm-multi-check-cell>
      <fm-multi-check-cell identity="q"></fm-multi-check-cell>
      <fm-multi-check-cell identity="r"></fm-multi-check-cell>
      <fm-multi-check-cell identity="s"></fm-multi-check-cell>
      <fm-multi-check-cell identity="t"></fm-multi-check-cell>
      <fm-multi-check-cell identity="u"></fm-multi-check-cell>
      <fm-multi-check-cell identity="v"></fm-multi-check-cell>
      <fm-multi-check-cell identity="w"></fm-multi-check-cell>
      <fm-multi-check-cell identity="x"></fm-multi-check-cell>
      <fm-multi-check-cell identity="y"></fm-multi-check-cell>
      <fm-multi-check-cell identity="z"></fm-multi-check-cell>
    </fm-multi-check-group>
  </div>
</template>

<style scoped>
  .check-group {
    /* width: 1080px;
            height: 500px; */
  }
</style>

<script>
  import { FmMultiCheckGroup, FmMultiCheckCell } from '../../../index'
  import Title from '../../_mods/title.vue'
  import Category from '../../_mods/category.vue'
  import { setTitle } from '../../_mods/set-nav'

  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, FmMultiCheckGroup, FmMultiCheckCell },
    methods: {
      click() {
        modal.toast({ message: '点击了安装' })
      }
    }
  }
</script>
