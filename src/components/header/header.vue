<template>
    <div class="header-container" v-if="user[0]">
      <div class="pic">
        <img width="40px" height="40px" :src="user[0].userPic" alt=""/>
      </div>
      <div class="phone">{{user[0].phone}}</div>
      <div class="msg">
        <img width="25px" height="19px" src="../../../static/image/header/msg.png" alt=""/>
        <p>消息</p>
      </div>
      <div class="service">
        <img width="20px" height="20px" src="../../../static/image/header/service.png" alt=""/>
        <p>在线客服</p>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    user: {}
  },
  data () {
    return {
    }
  },
  beforeCreate () {
  },
  methods: {
    dateDelete: function (index) {
      console.log(this.arr[index])
      console.log(index)
      this.arr.splice(index, 1)
    },
    goLink: function () {
      setTimeout(() => {
        this.$router.push({path: '/main'})
      }, 500)
    },
    sendData: function () {
    }
  },
  beforeMount () {
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header-container
  background-color: #51B2F9;
  position:fixed
  top:0
  left:0
  padding:4px 5px
  width: 100%
  height: 48px
  color:#FEFFFF
  z-index :100
  .pic
    float:left
    width: 50px
  .phone
    float:left
    width: 120px
    font-size :18px
    line-height :40px
  .service,.msg
    float:right
    width: 50px
    font-size :10px
    text-align :center
    margin-top: 3px
  .msg
    width: 30px
    img
      margin-bottom: 1px
</style>
