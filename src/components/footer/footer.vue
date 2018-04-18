<template>
    <div class="footer-container" v-if="footer">
      <div  v-for="(item,index) in footer" :key="index" class="width">
        <router-link :to="item.url" :class="item.class">
          <img width="25px" height="25px" :src="item.pic" alt=""/>
          <p :class="index<4?'':'video'">{{item.text}}{{item.length}}</p>
        </router-link>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    footer: {}
  },
  methods: {
    loadLink: function (link) {
      setTimeout(() => {
        this.$router.push({path: link})
      }, 50)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footer-container
  position:fixed
  bottom: 0
  left: 0
  height: 48px
  width: 100%
  background: #F7F7F7
  font-size :12px
  border-top:1px solid #E5E5E5
  padding-top: 3px
  display:flex
  .width
    display :flex
    width: 20%
    flex-direction: column
    justify-content: center
    align-items :center
    .router-link-exact-active
      p
        color:#0000FF
    .my
      display :flex
      flex-direction: column
      justify-content: center
      align-items :center
    p
      color: #999
  .my-main
    width: 50px
    height: 50px!important
    border:1px solid #E1E1E1
    transform: rotate(45deg)
    transform-origin: center bottom
    -webkit-border-radius: 20px
    -moz-border-radius: 20px
    border-radius: 20px
    background: #fff
    position:relative
    bottom: 15px
    left: -18%
    margin:auto
    img
      transform: rotate(-45deg)
      position:relative
      left: 7px
      bottom: -7px
    p
      display:inline-block
      transform: rotate(-45deg)
      position:relative
      left: 22px
      bottom: 0
      color: #999
  .my-right
    .video
      background:#8EC221
      padding: 3px
      -webkit-border-radius: 5px
      -moz-border-radius: 5px
      border-radius: 5px
      position:relative
      top: -2px
      color:#F0F7E7
  .tex
    color:#000
</style>
