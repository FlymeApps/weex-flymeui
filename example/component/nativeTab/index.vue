<template>
   <FmTab :tab="test" @tabPosition="ontab" class="t">
  <!--子标签 1> -->
  <list class="list" @loadmore="fetch" loadmoreoffset="10">
    <cell class="cell" v-for="num in lists">
      <div class="panel">
        <text class="text">{{num}}</text>
      </div>
    </cell>
  </list>
 <!--子标签 2> -->
  <list class="list" >
    <cell class="cell" v-for="num in lists">
      <div class="panel">
        <text class="text">112</text>
      </div>
    </cell>
  </list>
  <!--子标签 3> -->
 <FmLoading/>
 <!--子标签 4> -->
<list class="list" >
    <cell class="cell" v-for="num in lists">
      <div class="panel">
        <text class="text">112</text>
      </div>
    </cell>
  </list>
    <!--子标签 5> -->
  <list class="list" >
    <cell class="cell" v-for="num in lists">
      <div class="panel">
        <text class="text">112</text>
      </div>
    </cell>
  </list>
 </FmTab>
</template>

<script>
const modal = weex.requireModule('modal');
const LOADMORE_COUNT = 4;

export default {
  data () {
    return {
      lists: [1, 2, 3, 4, 5],
      test: { container: { viewpagepaddingLeft: 0, viewpagepaddingRight: 0, viewpagepaddingTop: 80, viewpagepaddingBottom: 0, tabpaddingLeft: 0, tabpaddingRight: 0, tabpaddingTop: 0, tabpaddingBottom: 0 }, tabs: [{ text: 'a222h', paddingStart: 18, paddingEnd: 18, minWidth: 50, textunSelectColor: '#ef8394', textSelectColor: '#FF198DED' }, { text: 'a22sa22ssss2hsss2h', minWidth: 50, paddingStart: 8, paddingEnd: 8, textunSelectColor: '#ef8394', textSelectColor: '#FF198DED' }, { text: 'ah', minWidth: 30, paddingStart: 5, paddingEnd: 5, textunSelectColor: '#ef8394', textSelectColor: '#FF198DED' }, { text: 'ah', paddingStart: 5, paddingEnd: 5, textunSelectColor: '#ef8394', textSelectColor: '#FF198DED' }, { text: 'aa22ssss2hh', paddingStart: 5, paddingEnd: 5, textunSelectColor: '#ef8394', textSelectColor: '#FF198DED' }] }
    };
  },
  methods: {
    fetch (event) {
      modal.toast({ message: 'loadmore', duration: 1 });

      setTimeout(() => {
        const length = this.lists.length;
        for (let i = length; i < length + LOADMORE_COUNT; ++i) {
          this.lists.push(i + 1);
        }
      }, 800);
    },
    ontab (event) {
      modal.toast({ message: event.position, duration: 1 });
    }
  }
};
</script>

<style scoped>
.t{
 margin-top: 0px;
}
.list{
     /*margin-bottom:180px;*/
height:1500px;

}
  .panel {
    width: 900px;
    height: 250px;
    margin-left: 75px;
    margin-right:75px;
    margin-top: 35px;
    margin-bottom: 35px;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
</style>