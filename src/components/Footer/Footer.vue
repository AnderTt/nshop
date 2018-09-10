<template>
  <footer class="footer_guide">
    <span class="guide_item" @click="goTo('/msite')"  :class="{ on : this.$route.path ==='/msite' || this.$route.path ==='/' }">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" @click="goTo('/knowledge')" :class="{ on : this.$route.path ==='/knowledge' }" >
      <span class="item_icon">
        <i class="iconfont icon-bd-"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" @click="goTo('/category')" :class="{ on : this.$route.path ==='/category' }"  >
      <span class="item_icon">
        <i class="iconfont icon-icon"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" @click="goTo('/shopCart')" :class="{ on : this.$route.path ==='/shopCart' }">
      <span class="item_icon">
        <i class="iconfont icon-gouwuchekong"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" @click="goTo('/profile')" :class="{ on : this.$route.path ==='/profile' }">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </span>
  </footer>
</template>
<script>
  export default {
    methods : {
      goTo(path){
        this.$router.replace(path)
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    overflow hidden
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      color #666
      padding-top 5px
      &.on
        color #b4282d
      span
        font-size 24px
        padding 5px 0
        .iconfont
          font-size 40px
</style>
