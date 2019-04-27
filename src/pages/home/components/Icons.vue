<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-contant"
                 :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        loop: true
      },
      iconList: [{
        id: '01',
        imgUrl: 'https://static.easyicon.net/preview/122/1223778.gif',
        desc: '景点门票'
      }, {
        id: '02',
        imgUrl: 'https://static.easyicon.net/preview/122/1223786.gif',
        desc: '爱你哦'
      }, {
        id: '03',
        imgUrl: 'https://static.easyicon.net/preview/122/1223780.gif',
        desc: '吼吼吼'
      }, {
        id: '04',
        imgUrl: 'https://static.easyicon.net/preview/122/1223781.gif',
        desc: '啦啦啦'
      }, {
        id: '05',
        imgUrl: 'https://static.easyicon.net/preview/122/1223778.gif',
        desc: '景点门票'
      }, {
        id: '06',
        imgUrl: 'https://static.easyicon.net/preview/122/1223786.gif',
        desc: '爱你哦'
      }, {
        id: '07',
        imgUrl: 'https://static.easyicon.net/preview/122/1223780.gif',
        desc: '吼吼吼'
      }, {
        id: '08',
        imgUrl: 'https://static.easyicon.net/preview/122/1223781.gif',
        desc: '啦啦啦'
      }, {
        id: '09',
        imgUrl: 'https://static.easyicon.net/preview/122/1223781.gif',
        desc: '啦啦啦'
      }]
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .icons >>> .swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
  .icons
    margin-top .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-contant
          height: 100%
          display block
          margin 0 auto
      .icon-desc
        width 100%
        height .44rem
        line-height .44rem
        position: absolute
        bottom: 0
        text-align center
        color: $darkTextColor
</style>
