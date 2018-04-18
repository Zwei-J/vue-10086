<template>
    <div class="business-child">
      <div class="business-child-container" v-for="(item,index) in data" :key="index">
        <div class="business-child-left">
          <img class="business-child-pic" :src="item.pic" alt="">
          <div class="business-child-left-text">
            <p class="title">{{item.title}}</p>
            <p class="content">{{item.content}}</p>
            <p class="price">
              {{item.price}}
              <span class="specification">{{item.specification}}</span>
              <span class="last">起</span>
            </p>
          </div>
        </div>
        <div class="business-child-right">&gt;</div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default{
  props: {
    data: {}
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.business-child
  display:flex
  padding-left: 10px
  flex-direction: column
  background: #fff
  max-width: 100%
  .business-child-container
    display:flex
    justify-content:space-between
    align-items: center
    width:100%
    border-bottom:1px solid #E3E3E3
    padding: 10px 15px
    .business-child-left
      display:flex
      align-items:center
      .business-child-pic
        width: 55px
        height: 50px
        margin-right: 10px
      .business-child-left-text
        line-height: 25px
        .title
          color: #000000
        .content
          width: 200px
          margin-bottom: 10px
          font-size: .75rem
          color:#9D9D9D
          overflow: hidden
          text-overflow:ellipsis
          white-space: nowrap
        .price,.specification
          color:#E50F7B
          font-size: 1.2rem
          .specification,.last
            font-size: .7rem
    .business-child-right
      color:#A4A4A4
      font-size: 1.2rem
</style>
