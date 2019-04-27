<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '1',
        imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1556352748&di=0146885de037ea081295590a788c9801&src=http://00.minipic.eastday.com/20170411/20170411212923_f3b93bece00e4178f3bc684240278d9a_5.jpeg',
        title: '1大连生涯海洋世界',
        desc: '浪漫大连首站，浪漫的海洋世界'
      }, {
        id: '2',
        imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1556352748&di=0146885de037ea081295590a788c9801&src=http://00.minipic.eastday.com/20170411/20170411212923_f3b93bece00e4178f3bc684240278d9a_5.jpeg',
        title: '大2连生涯海洋世界',
        desc: '浪漫大连首站，浪漫的海洋世界'
      }, {
        id: '3',
        imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1556352748&di=0146885de037ea081295590a788c9801&src=http://00.minipic.eastday.com/20170411/20170411212923_f3b93bece00e4178f3bc684240278d9a_5.jpeg',
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
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
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
