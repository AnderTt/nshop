<template>
  <div>
   <!-- 轮播图-->
    <section class="swiper-container" >
      <div class="swiper-wrapper">
        <a class="swiper-slide" v-for="(item,index) in Knowledge.banner" :key="index">
          <img :src="item.picUrl">
          <div class="content" v-if="item.subTitle">
            <div  class="subTitle">-{{item.subTitle}}-</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </a>
      </div>
    </section>
    <!--轮播图tabs-->
    <section class="kcc_tabs">
      <ul class="kcc_list">
        <li v-for="(item,index) in Knowledge.column" :key="index">
          <a href="javascript:;">
            <div class="header_text" :style="{backgroundImage : `url(${item.picUrl})`}">
              <p class="titleCount">{{item.articleCount}}</p>
            </div>
            <div class="title">{{item.title}}</div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  export default {
    computed : {
      ...mapState(['Knowledge'])
    },
    watch : {
      Knowledge(){
        this.$nextTick(()=>{
          this._initSwiper()
          this._initBScroll()
        })
      }
    },
    methods : {
      _initSwiper(){
        new Swiper('.swiper-container', {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 10,
          loop : true,
          pagination: {
            el: '.swiper-pagination',
          },
        });
      },
      _initBScroll(){
        new BScroll('.kcc_tabs',{
          scrollX : true,
          click : true
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    background-color #fff
    height 385px
    overflow hidden
    .swiper-wrapper
      .swiper-slide
        width 670px
        text-align center
        height 100%
        display block
        position relative
        .content
          position absolute
          left 0
          right 0
          top 0
          bottom 0
          margin auto
          width 480px
          height 200px
          display flex
          justify-content center
          flex-direction column
          align-items center
          background-color rgba(255,255,255,.8)
          .subTitle
            line-height 80px
          .title
            font-size 32px
            color #333
            font-weight 700
            margin-bottom 20px
          .desc
            font-size 24px
      img
        width 670px
        height 100%
  .kcc_tabs
    width 100%
    background-color #fff
    padding 30px
    display flex
    flex-flow row nowrap
    box-sizing border-box
    overflow hidden

    .kcc_list
      display flex
      flex-flow row nowrap
      box-sizing border-box
      flex-shrink 0
      li
        margin-right 24px
        a
          display block
          text-align center
          .header_text
            width 164px
            height 164px
            /*background-image url("./images/tabs_01.png")*/
            background-size 100%
            margin-bottom 22px
            .titleCount
              text-align right
              padding 5px 8px 0 0
              font-size 12px
              color #fff



</style>
