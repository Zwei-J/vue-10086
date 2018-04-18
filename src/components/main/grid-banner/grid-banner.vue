<template>
    <div class="top-banner-container">
      <div class="content" v-for="(item,index) in gridBanner" :key="index" @click="conTe">
        <img class="pic" :src="item.pic" alt=""/>
        <p class="text">{{item.title}}</p>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    gridBanner: {}
  },
  created () {},
  methods: {
    conTe: function () {
      alert(this.gridBanner)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .top-banner-container
    display :flex
    flex-wrap :wrap
    border-top:1px solid #F4F4F4
    border-left:1px solid #F4F4F4
    background: #fff
    margin-bottom: 10px
    .content
      display :flex
      justify-content:center
      align-items:center
      flex-direction :column
      border-bottom:1px solid #F4F4F4
      border-right:1px solid #F4F4F4
      width: 25%
      padding: 15px 0
      .pic
        width: 25px
        height: 25px
        margin-bottom :10px
      .text
        color: #333
        font-size :.8rem
  .test
    display :none
</style>
