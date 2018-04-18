<template>
  <div class="region-container" v-if="region">
    <img class="bigPic" :src="region[0] && region[0].bigPic" alt="" />
    <div class="content">
      <div class="left">
        <div class="text">
          <div class="left-title">{{region[1] && region[1].title}}</div>
          <div class="text-content">{{region[1] && region[1].content}}</div>
        </div>
        <img class="left-pic" :src="region[1] && region[1].pic" alt="" />
      </div>
      <div class="right">
        <div class="top">
          <div class="top-text">
            <div class="top-title">{{region[2] && region[2].title}}</div>
            <div class="text-content">{{region[2] && region[2].content}}</div>
          </div>
          <img class="right-pic" :src="region[2] && region[2].pic" alt="">
        </div>
        <div class="bottom">
          <div class="bottom-text">
            <div class="bottom-title">{{region[3] && region[3].title}}</div>
            <div class="text-content">{{region[3] && region[3].content}}</div>
          </div>
          <img class="right-pic" :src="region[3] && region[3].pic" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    region: {}
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.region-container
  display:flex
  flex-direction :column
  background :#fff
  .bigPic
    width: 100%
  .content
    display:flex
    border-top:1px solid #F3F3F3
    border-left:1px solid #F3F3F3
    font-size :14px
    .text-content
      color:#858585
    .left
      display:flex
      align-items :center
      justify-content :space-between
      width:50%
      padding:0 10px
      border-right:1px solid #F3F3F3
      border-bottom:1px solid #F3F3F3
      .left-pic
        width: 70px
        height: 70px
      .left-title
        color:#FFCC00
        margin-bottom: 10px
    .right
      display:flex
      align-items :center
      justify-content :space-between
      flex-direction :column
      width:50%
      .top,.bottom
        display:flex
        width: 100%
        justify-content :space-between
        align-items center
        border-right:1px solid #F3F3F3
        border-bottom:1px solid #F3F3F3
        padding:5px 10px
        .right-pic
          width: 40px
          height: 40px
        .top-title
          color:#FF0000
          margin-bottom: 5px
        .bottom-title
          color:#0707FF
          margin-bottom: 5px
</style>
