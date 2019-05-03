<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://b2-q.mafengwo.net/s13/M00/76/AB/wKgEaVzIEVaANt5tAAj8y-J8sbg52.jpeg?imageMogr2%2Finterlace%2F1" alt="">
      <div class="banner-info">
        <div class="banner-title">hahahha</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
        'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    background blue
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background linear-gradient(top, rgba(0, 0, 0 ,0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding .2rem
      .banner-number
        margin-top .3rem
        margin-right: .2rem
        padding 0 .4rem
        height .4rem
        line-height .4rem
        border-radius .2rem
        background rgba(0, 0, 0, 0.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
