<template>
  <div id="app">
    <v-header :user="user"></v-header>
    <router-view></router-view>
    <v-footer :footer="footer"></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header'
import footer from './components/footer/footer'
const ERR_OK = 0
export default {
  data () {
    return {
      footer: [],
      header: {},
      user: []
    }
  },
  created () {
    // 获取footer数据
    this.$http.get('/api/footer').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.footer = response.data
      }
    })
    this.$http.get('/api/header').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.header = response.data
        this.user = response.data.user
      }
    })
  },
  mounted () {
  },
  methods: {
  },
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 html,body,#app
   width: 100%
   height: 100%
   background-color:#ECECEC
</style>
