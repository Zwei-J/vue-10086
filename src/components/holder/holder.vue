<template>
    <div class="">

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

</style>
