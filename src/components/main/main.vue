<template>
  <transition name="fade">
    <div class="main-container" ref="wrapper">
      <div class="container">
        <div class="main-header">
          <div class="position">
            <span>广东省 · 广州市 ></span>
          </div>
          <div class="eye">
            <img width="18px" height="10px" src="../../../static/image/main/eye.jpg" alt=""/>
          </div>
          <div class="price">
            <div class="text">账户余额</div>
            <div class="num">
              {{price}} <span>元</span>
            </div>
            <div class="recharge">
              充值95折
              <div>&gt;</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="flow">
            <div class="text">可用常用流量</div>
            <div class="num">
              {{flow}} <span>M</span>
            </div>
            <div class="recharge">
              流量管家
              <div>&gt;</div>
            </div>
          </div>
          <div class="bbs">
            <!--<img width="30px" height="30px" src="../../../static/image/main/bbs.jpg" alt="">-->
          </div>
          <div class="bbs-content">
            {{bbs}}
          </div>
        </div>
        <v-gridBanner :gridBanner="firstBanner"></v-gridBanner>
        <v-banner :banner="banner"></v-banner>
        <v-title :msg="'当季热推'"></v-title>
        <v-gridBanner :gridBanner="secondBanner"></v-gridBanner>
        <v-title :msg="'专属特惠'"></v-title>
        <v-region :region="firstRegion"></v-region>
        <v-title :msg="'靓号专区'"></v-title>
        <v-banner :banner="banner"></v-banner>
        <v-gridBanner :gridBanner="firstBanner"></v-gridBanner>
        <v-title :msg="'流量专区'"></v-title>
        <img class="banner10" src="../../../static/image/main/banner/banner10.jpg" alt="">
        <v-gridBanner :gridBanner="secondBanner"></v-gridBanner>
        <v-title :msg="'宽带专区'"></v-title>
        <v-region :region="firstRegion"></v-region>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import gridBanner from './grid-banner/grid-banner'
import banner from './banner/banner'
import title from './title/title'
import region from './region/region'
const ERR_OK = 0
export default {
  data () {
    return {
      price: 99123.98,
      flow: 999999.99,
      listMsg: [],
      bbs: '【戳我】收阅电子账单，齐分千万份流量！',
      main: [],
      firstBanner: [],
      secondBanner: [],
      banner: [],
      firstRegion: []
    }
  },
  created () {
    this.$http.get('/api/main').then((response) => {
      response = response.body
      let data = response.data
      if (response.errno === ERR_OK) {
        this.main = Object.assign({}, this.main, response.data)
        this.firstBanner = data.firstBanner
        this.banner = data.banner
        this.secondBanner = data.secondBanner
        this.firstRegion = data.firstRegion
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true
          })
        })
      }
    })
  },
  mounted () {
  },
  methods: {
    del: function (index) {
      this.listMsg.splice(index, 1)
    }
  },
  components: {
    'v-gridBanner': gridBanner,
    'v-banner': banner,
    'v-title': title,
    'v-region': region
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .main-container
    position:fixed
    top: 47px
    left: 0
    bottom: 47px
    width :100%
    overflow :hidden
    transition:all .3s
    margin-bottom: 10px
    &.fade-enter-active, &.fade-leave-active
      transform :scale(1)
    &.fade-enter, &.fade-leave-active
      transform :scale(0)
    .main-header
      height: 170px
      width: 100%
      position:relative
      background:#51B2F9
      font-size :12px
      .position
        position:absolute
        top: 5px
        left:0
        width: 125px
        border-top-right-radius :14px
        border-bottom-right-radius :14px
        line-height: 24px
        font-size :10px
        padding-left: 30px
        background :#92D2F8 url("../../../static/image/main/position.png") no-repeat 6px 4px
        -webkit-background-size: 14px 16px
        background-size: 14px 16px
      .eye
        position:absolute
        right: 10px
        top: 5px
      .price,.flow
        float:left
        width: 49.8%
        text-align :center
        position:relative
        top: 40px
        left: 0
        line-height :25px
        .num
          font-size :20px
          span
            font-size :10px
        .recharge
          display :inline-block
          width: 105px
          font-size :14px
          margin-top: 8px
          -webkit-border-radius: 15px
          -moz-border-radius: 15px
          border-radius: 15px
          background:#92D2F8
          div
            display inline-block
            width: 16px
            height: 16px
            line-height :14px
            text-align :center
            -webkit-border-radius: 50%
            -moz-border-radius: 50%
            border-radius: 50%
            border:1px solid #fff
            font-size :14px
      .line
        float:left
        border-left:1px solid #92D2F8
        height: 100px
        position:relative
        top: 30px
      .bbs
        position:absolute
        left: 0
        bottom: 0
        width: 70px
        height: 40px
        border-top-right-radius :50px
        background :#9DD5F8 url("../../../static/image/main/bbs.png") no-repeat 15px 10px
        background-size: 25px 25px
        z-index :100
      .bbs-content
        position:absolute
        bottom: 0
        left: 0
        width :100%
        height: 30px
        line-height :30px
        text-align :center
        background :#9DD5F8
        color:#1477BE
        font-size :12px
    .list
      color: #000
      line-height :25px
      button
        color: #e4393c
    .banner10
      width: 100%
</style>
