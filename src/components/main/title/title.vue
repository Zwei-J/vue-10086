<template>
    <div class="title-container">
      <div class="text">{{msg}}</div>
      <div class="text">&gt;</div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    msg: {}
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.title-container
  display:flex
  justify-content:space-between
  padding:5px 8px
  background :#fff
  margin-top: 10px
  .text
    color: #A6A6A6
</style>
