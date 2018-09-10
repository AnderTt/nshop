<template>
  <section class="goods_suply">
    <header class="header">
      <span>品牌制造商直供</span>
      <i class="iconfont icon-guanbi01"></i>
    </header>
    <ul class="gs_list">
      <li v-for="(goodSupply) in goodsSupplyArr" :key="goodSupply.id">
        <a href="javascript:;">
          <div class="gs_text">
            <p>{{goodSupply.name}}</p>
            <p class="price">{{goodSupply.floorPrice}}</p>
            <i class="iconfont icon-mojitianqishangxinbiaoqian"></i>
          </div>
          <img :src="goodSupply.picUrl">
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    computed : {
      ...mapGetters(['goodsSupplyArr'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .goods_suply
    width 100%
    background-color #fff
    .header
      height 110px
      font-size 36px
      line-height 110px
      text-align center
    .gs_list
      font-size 0
      margin 0 16px
      li
        margin-right 8px
        margin-bottom 8px
        display inline-block
        width 358px
        height 236px
        &:nth-child(2n)
          margin-right 0
        a
          position relative
          background-color #f4f4f4
          display block
          height 100%
          .gs_text
            position absolute
            left 0
            top 0
            padding 20px 0 0 20px
            width 100%
            color #000
          .gs_text
            p
              margin-bottom 12px
              font-size 30px
              &.price
                font-size 28px
            .icon-mojitianqishangxinbiaoqian
              font-size 36px
              color #b16300
              font-weight 200
          img
            width 100%
            height 100%
</style>
