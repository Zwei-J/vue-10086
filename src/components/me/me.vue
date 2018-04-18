<template>
  <transition name="me">
    <div class="me-container" ref="me">
      <div class="container">
        <div class="top">
          <div class="me-header">
            <div class="me-header-sign">
              <p class="sign-text">点我签到</p>
            </div>
            <div class="me-header-bottom">
              <div class="bottom-left">
                <p>我的星级</p>
                <img class="pic" height="20px" src="../../../static/image/me/me-star.png" alt="">
              </div>
              <div class="bottom-right">
                <img class="pic" width="40px" height="20px" src="../../../static/image/me/me-vip.png" alt="">
                <p>我的星级</p>
              </div>
            </div>
          </div>
          <div class="me-details">
            <div class="detail" v-for="(item,index) in detail" :key="index">
              <p class="title">
                {{item.title}}
                <span class="span-item">&gt;</span>
              </p>
              <p class="num">
                {{item.num}}
                <span class="unit">{{item.unit}}</span>
              </p>
            </div>
          </div>
        </div>
        <v-gridbanner :gridBanner="gridBanner"></v-gridbanner>
        <v-banner :banner="scrollBanner"></v-banner>
        <div class="settings">
          <div class="settings-left">
            <img class="settings-pic" src="../../../static/image/me/settings.png" alt="" />
            <p class="settings-text">设置</p>
          </div>
          <div class="settings-right">&gt;</div>
        </div>
        <div class="settings">
          <div class="settings-left">
            <img class="settings-pic" src="../../../static/image/me/help.png" alt="" />
            <p class="settings-text">帮助与反馈</p>
          </div>
          <div class="settings-right">&gt;</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
import gridBanner from '../main/grid-banner/grid-banner'
import banner from '../main/banner/banner'
import BScroll from 'better-scroll'
const ERR_OK = 0
export default {
  data () {
    return {
      gridBanner: [],
      scrollBanner: [],
      detail: [
        {
          'title': '余额',
          'num': 99123.98,
          'unit': '元'
        },
        {
          'title': '常用流量',
          'num': 999999.99,
          'unit': 'M'
        },
        {
          'title': '积分',
          'num': 888888,
          'unit': '分'
        },
        {
          'title': '优惠券',
          'num': 6,
          'unit': '张'
        }
      ]
    }
  },
  created () {
    this.$http.get('/api/me').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        let data = response.data
        this.gridBanner = data.gridBanner
        this.scrollBanner = data.scrollBanner
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.me, {
            click: true
          })
        })
      }
    })
  },
  components: {
    'v-gridbanner': gridBanner,
    'v-banner': banner
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .me-container
    position:fixed
    top: 48px
    bottom: 47px
    width: 100%
    color: #000000
    background: #ddf
    transition:all .3s
    &.me-enter-active, &.me-leave-active
      top: 48px
      bottom: 47px
    &.me-enter, &.me-leave-active
      top: -100%
      bottom:auto
  .top
    background: #fff
    margin-bottom: 5px
  .me-header
    display:flex
    flex-direction :column
    align-items center
    background:#51B2F9
    padding-bottom: 20px
    border-bottom-left-radius :22%
    border-bottom-right-radius :22%
    .me-header-sign
      padding: 10px
      .sign-text
        display:inline-block
        padding: 10px
        font-size :1.1rem
        background :#F986B1
        -webkit-border-radius: 10px
        -moz-border-radius: 10px
        border-radius: 10px
        color:#FDDCE8
    .me-header-bottom
      display:flex
      justify-content :space-between
      width: 100%
      margin:15px 0 20px
      .bottom-left,.bottom-right
        display:flex
        align-items :center
        justify-content :space-around
        width: 130px
        background:#319CEA
        padding:5px 0
        p
          font-size :.8rem
      .bottom-left
        border-top-right-radius: 15px
        border-bottom-right-radius: 15px
      .bottom-right
        border-top-left-radius: 15px
        border-bottom-left-radius: 15px
  .me-details
    background :#fff
    padding: 0 5px
    display:flex
    line-height :30px
    .detail
      display:flex
      width: 25%
      flex-direction column
      align-items center
      margin:10px 0
      .title
        font-size :1.1rem
        color:#494948
        .span-item
          font-size :.7rem
          color:#DEDEDE
      .num
        font-size :.9rem
        color:#52A3DC
        .unit
          color:#52A3DC
          font-size .6rem
  .settings,.help
    display:flex
    justify-content :space-between
    align-items center
    background: #fff
    padding:10px
    margin:1px 0
    border-bottom:1px solid #FEFFFF
    .settings-left
      display:flex
      align-items center
      .settings-pic
        width: 25px
        height: 25px
      .settings-text
        margin-left: 10px
        color: #5C5C5C
    .settings-right
      color: #B9B9B9
  .tex
    color: #000000
</style>
