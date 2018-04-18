<template>
    <div class="business-container" ref="business">
      <div class="business">
        <div class="search">
          <input class="search-input" type="text" placeholder="流量年包">
        </div>
        <div class="menu">
          <div class="menu-item" v-for="(item,index) in businessBanner" :key="index">
            <img class="menu-pic" :src="item.pic" alt="" />
            <p class="menu-text">{{item.title}}</p>
          </div>
        </div>
        <div class="business-text">流量上网</div>
        <div class="nav">
          <div @click="selectStyle (item, index)" :class="{'active':item.active,'unactive':!item.active}" class="nav-link" v-for="(item,index) in nav" :key="index">{{item.msg}}</div>
        </div>
        <router-view :data="business"></router-view>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Vue from 'vue'
const ERR_OK = 0
export default {
  data () {
    return {
      data: {},
      businessBanner: {},
      nav: [],
      business: [],
      num: 0,
      active: true,
      items: [
        {select: '第一行'},
        {select: '第二行'},
        {select: '第三行'},
        {select: '第四行'}
      ]
    }
  },
  created () {
    this.$http.get('/api/business').then((response) => {
      response = response.body
      let data = response.data
      if (response.errno === ERR_OK) {
        this.data = data
        this.businessBanner = data.businessBanner
        this.nav = data.nav
        this.business = data.business1
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.business, {
            click: true
          })
        })
      }
    })
  },
  methods: {
    selectStyle: function (item, index) {
      this.$nextTick(() => {
        this.nav.forEach((item) => {
          Vue.set(item, 'active', false)
        })
        Vue.set(item, 'active', true)
      })
      let newData = 'business' + (index + 1)
      this.business = this.data[newData]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.business-container
  position:fixed
  top: 47px
  left: 0
  bottom: 47px
  width :100%
  overflow :hidden
  transition:all .3s
  margin-bottom: 10px
  *
    color:#2E2F2E
  .search
    width: 100%
    padding: 5px 10px
    background: #fff
    .search-input
      width:100%
      padding:0 8px 0 40px
      line-height: 35px
      font-size :1.1rem
      border-radius :10px
      background:#F6F6F6 url('../../../static/image/business/search.png') no-repeat 10px center
      background-size: 22px
  .menu
    display:flex
    flex-direction :row
    flex-wrap :wrap
    background: #fff
    padding:10px 4px 0
    .menu-item
      display :flex
      flex-direction :column
      align-items:center
      width: 20%
      margin-bottom :20px
      .menu-text
        font-size :.8rem
        margin-top: 8px
    .menu-pic
      width: 2rem
      height: 2rem
  .business-text
    width: 100%
    padding: 10px 20px
    margin-top: 5px
    background: #fff
    border-bottom :1px solid #E3E3E3
  .nav
    overflow :auto
    background: #fff
    width: 100%
    padding:0 5px
    height: 35px
    white-space:nowrap
    border-bottom :1px solid #E3E3E3
    .nav-link
      display:inline-block
      margin:0 2.5px
      font-size :.8rem
      padding:10px 0
      &.active
        color:#38A0DC
        border-bottom :1px solid #1385D0
      &.unactive
        color:#2E2F2E
        border: 0
</style>
