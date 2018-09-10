<template>
    <div class="knowledgeContainer">
      <header class="kc_hd">
        <span class="icon_home span_item">
          <i class="iconfont  icon-shouye"></i>
        </span>
        <span class="icon_logo  span_item">
          <img src="../../assets/images/logo.png" alt="">
        </span>
        <span class="icon_search span_item">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="icon_cart span_item">
          <i class="iconfont icon-gouwuchekong"></i>
        </span>
      </header>
      <div class="kc_container">
        <Banner/>
        <!--空白-->
        <Split/>
        <!--为你推荐-->
        <RecommendToyou v-if="Knowledge.recommend" :data="Knowledge.recommend"/>
        <!--空白-->
        <Split/>
        <!--十点一刻-->
        <Ten v-if="Knowledge.tenfifteen" :data="Knowledge.tenfifteen"/>
        <!--空白-->
        <Split/>
        <!--严选甄品-->
        <BestGoods v-if="Knowledge.zhen" :data="Knowledge.zhen"/>
        <!--空白-->
        <Split/>
        <!--严选look-->
        <div class="yc_look">
          <section class="look_con" v-if="Knowledge.yxLook">
            <header class="lc_title">严选Look</header>
            <div class="lc_wrapper">
              <div class="lc_look">
                <img :src="Knowledge.yxLook.picUrl" alt="">
              </div>
              <div class="lc_content">
                <div class="author">
                  <img :src="Knowledge.yxLook.avatar" alt="">
                  <div class="nickName">{{Knowledge.yxLook.nickname}}</div>
                </div>
                <div class="comment">{{Knowledge.yxLook.content}}</div>
              </div>
            </div>
          </section>
        </div>
        <!--更多精彩-->
        <More v-if="Knowledge.yxWeek" :data="Knowledge.yxWeek"/>
      </div>
      <!--返回顶部-->
      <GoTop/>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import Banner from './Banner/Banner.vue'
  import BestGoods from './BestGoods/BestGoods.vue'
  import More from './More/More.vue'
  import RecommendToyou from './RecommendToyou/RecommendToyou.vue'
  import Ten from './Ten/Ten.vue'
  import {mapState} from 'vuex'
  import GoTop from '../../components/GoTop/GoTop.vue'
  export default {
    components : {
      Banner,
      BestGoods,
      More,
      RecommendToyou,
      Ten,
      GoTop
    },
    mounted(){
      this.$store.dispatch('getKnowledge')
    },
    computed : {
      ...mapState(['Knowledge'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .knowledgeContainer
    width 100%
    overflow hidden
    position relative
    .kc_hd
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


    .kc_container
      padding-top 98px
      padding-bottom 118px
      .yc_look
        width 100%
        background-color #fff
        .lc_title
          height 120px
          line-height 120px
          text-align center
          font-size 32px
        .lc_wrapper
          .lc_look
            width 100%
            height 750px
            img
              width 100%
              height 750px

          .lc_content
            padding 24px 30px 46px
            .author
              margin-bottom 24px
              .nickName
                display inline-block
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
                color #333
              img
                width 46px
                height 46px
                border-radius 100%
                vertical-align middle
            .comment
              display -webkit-box
              -webkit-line-clamp 2;
              -webkit-box-orient vertical;
              overflow hidden
              text-overflow ellipsis;
              font-size 20px
              line-height 36px
              color #7f7f7f
    .goTop
      position fixed
      width 82px
      height 82px
      right 30px
      bottom 128px
      background-image url("./images/goTop.png")
      background-repeat no-repeat
      background-size cover
 </style>
