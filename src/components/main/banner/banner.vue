<template>
  <div class="banner-content">
    <wc-swiper class="banner-box" v-if="banner.length">
      <wc-slide class="banner-item" v-for="(item, index) in banner" :key="index" ref="swiper" @touchstart="slide(index)">
        <img class="banner-pic" :src="item.pic" alt=""/>
      </wc-slide>
    </wc-swiper>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    banner: {}
  },
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  created () {},
  methods: {
    slide: function (index) {
      console.log(index)
      this.$refs.swiper.slideTo(index)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .banner-content
  .banner-box
    .banner-item
      .banner-pic
        width: 100%
</style>
