<template>
    <div class="msiteContainer" ref="msiteContainer">
      <!--头部-->
      <div class="header_top">
        <section class="mc_header">
          <h1 class="logo"><img src="../../assets/images/logo.png" alt="gogo"></h1>
          <div class="search">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共13097款好物</span>
          </div>
        </section>
        <section class="mc_tabs">
          <div class="mt_list">
            <span class="span-item on">推荐</span>
            <span class="span-item">居家</span>
            <span class="span-item">鞋包配饰</span>
            <span class="span-item">服装</span>
            <span class="span-item">电器</span>
            <span class="span-item">洗护</span>
            <span class="span-item">餐饮</span>
            <span class="span-item">婴童</span>
            <span class="span-item">文体</span>
            <span class="span-item">特色区</span>
          </div>
        </section>
      </div>
      <!--banner-->
      <Banner/>
      <!--banner下小导航-->
      <div class="nav_bar">
        <span class="nb_item">
          <i class="iconfont icon-down"></i>
          网易自营品牌
        </span>

        <span class="nb_item">
          <i class="iconfont icon-down"></i>
          30天无忧退货
        </span>

        <span class="nb_item">
          <i class="iconfont icon-down"></i>
          48小时快速退款
        </span>
      </div>
      <!--空白-->
      <Split/>
      <!--内容区-->
      <div class="mc_con">
        <!--商品直供-->
        <GoodsSupply/>
        <!--空白-->
        <Split/>
        <!--新品首发-->
        <NewGoods/>
        <!--空白-->
        <Split/>
        <!--人气推荐-->
        <RecommendGoods/>
        <!--空白-->
        <Split/>
        <!--福利推荐-->
        <section class="fuli">
          <div class="fl_img">
            <a href="javascript:;">
              <img src="./images/fuli.jpg" alt="">
            </a>
          </div>
        </section>
        <!--空白-->
        <Split/>
        <!--专题精选-->
       <SpecialGoods/>
        <!--空白-->
        <Split/>
        <!--居家好物-->
        <GoodGoods/>
        <!--返回顶部-->
        <GoTop/>
      </div>
      <!--遮罩层-->
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import Banner from './Banner/Banner.vue'
  import GoodsSupply from './GoodsSuply/GoodsSuply.vue'
  import NewGoods from './NewGoods/NewGoods.vue'
  import RecommendGoods from './RecommendGoods/RecommendGoods.vue'
  import SpecialGoods from './SpecialGoods/SpecialGoods.vue'
  import GoodGoods from './GoodGoods/GoodGoods.vue'
  import GoTop from '../../components/GoTop/GoTop.vue'
  import {mapState} from 'vuex'
  import CountDown from 'vue2-countdown'
  export default {
    components: {
      Banner,
      GoodsSupply,
      NewGoods,
      RecommendGoods,
      SpecialGoods,
      GoodGoods,
      CountDown,
      GoTop
    },
    mounted() {
      //获取home的值
      this.$store.dispatch('getHome')
    },
    computed: {
      ...mapState(['home'])
    },
    watch: {
      home() {
        this.$nextTick(() => {
          this._initBScroll()
        })
      }
    },
    methods: {
      _initBScroll() {
      new BScroll('.msiteContainer', {
        click: true
      })
    }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .msiteContainer
    width 100%
    padding-top 146px
    .header_top
      background-color #fff
      position fixed
      top 0
      left 0
      z-index 10
      width 100%
      height 148px
      .mc_header
        padding 16px 30px
        box-sizing border-box
        display flex
        .logo
          width 150px
          height 42px
          text-align center
          margin-right 20px
          img
            width 100%
            padding-top 8px
        .search
          width 80%
          font-size 28px
          height 56px
          line-height 56px
          background-color #ededed
          margin-left 10px
          color #666
          text-align center
          border-radius 6px
      .mc_tabs
        background #fff
        font-size 28px
        display flex
        flex-flow row nowrap
        width : 100%
        height 56px
        line-height 56px
        box-sizing border-box
        overflow hidden
        .mt_list
          padding 0 30px
          display flex
          flex-flow row nowrap
          flex-shrink: 0;
          height 60px
          line-height 60px
          margin-left -48px
          .span-item
            margin-left 48px
            padding 0 16px
    .nav_bar
      display flex
      font-size 16px
      height 72px
      line-height 72px
      background-color #fff
      padding 0 30px
      .nb_item
        flex 1
      .icon-down
        color #b4282d
        font-size 16px
        margin-left 10px
    .mc_con
      width 100%
      overflow hidden
      padding-bottom 98px
      .fuli
        width 100%
        height 300px
        .fl_img
          width 100%
          height 100%
          img
            width 100%
            height 100%
</style>
