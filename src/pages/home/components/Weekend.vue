<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of weekendList"
          :key="item.id"
      >
        <div class="item-wrapper-img">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '1',
        imgUrl: 'https://images.pexels.com/photos/1137511/pexels-photo-1137511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1137511/pexels-photo-1137511.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
        title: '1大连生涯海洋世界',
        desc: '浪漫大连首站，浪漫的海洋世界'
      }, {
        id: '2',
        imgUrl: 'https://images.pexels.com/photos/1137511/pexels-photo-1137511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1137511/pexels-photo-1137511.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
        title: '大2连生涯海洋世界',
        desc: '浪漫大连首站，浪漫的海洋世界'
      }, {
        id: '3',
        imgUrl: 'https://images.pexels.com/photos/1137511/pexels-photo-1137511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1137511/pexels-photo-1137511.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
        title: '大连3生涯海洋世界',
        desc: '浪漫大连首站，浪漫的海洋世界'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixin.styl"
  .title
    margin-top .1rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    padding .1rem
    .item-wrapper-img
      overflow hidden
      height 0
      padding-bottom 56%
      .item-img
        width 100%
        border-radius .06rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        margin-top .16rem
        line-height .44rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #ffffff
</style>
