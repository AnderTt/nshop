<template>
  <header class="pc_hd">
        <span class="icon_home span_item" @click="goTo('/')">
          <i class="iconfont  icon-shouye"></i>
        </span>
    <span class="icon_logo  span_item" >
          <img src="../../assets/images/logo.png" alt="">
        </span>
    <span class="icon_search span_item">
          <i class="iconfont icon-sousuo"></i>
        </span>
    <span class="icon_cart span_item" @click="goTo('/shopCart')">
          <i class="iconfont icon-gouwuchekong"></i>
        </span>
  </header>
</template>
<script>
  export default {
    methods : {
      goTo(path){
        this.$router.replace(path)
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .pc_hd
    background-color #fafafa
    position fixed
    top 0
    left 0
    z-index 10
    width 100%
    height 98px
    line-height 98px
    .span_item
      position absolute
      &.icon_home
        left 20px
        z-index 10
      &.icon_cart
        right 20px
      &.icon_search
        right 100px
        font-weight 200
      &.icon_logo
        left 0
        right 0
        top 20px
        text-align center
        img
          width 160px
          height auto
      i
        font-size 52px


</style>
