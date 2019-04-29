<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of list"
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
  props: {
    list: Array
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
      padding-bottom 38%
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
