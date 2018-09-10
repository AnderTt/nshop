<template>
  <div class="kc_tuijian">
    <section class="fy_goods">
      <header class="fy_header">{{data.name}}</header>
      <div class="fyg_good">
        <a href="javascript:;">
          <div class="fy_img">
            <img :src="data.Item[2].picUrl" alt="">
            <div class="tag">{{data.Item[2].typeName}}</div>
          </div>
          <div class="fy_text">
            <div class="top">
              <h5>{{data.Item[2].title}}</h5>
              <p class="price">{{data.Item[2].priceInfo}}元起</p>
            </div>
            <div class="decs">
              {{data.Item[2].subTitle}}}
            </div>
          </div>
        </a>
      </div>
      <div class="fy_conments">
        <div class="fy_conment">
          <div class="fyc_text">
            <div class="author">
              <img :src="data.Item[1].avatar" alt="">
              <span class="nickName">{{data.Item[1].nickname}}</span>
            </div>
            <div class="article">
              <h5 class="article_tltle ellipsis">
                {{data.Item[1].title}}
              </h5>
              <h5 class="article_con">
                {{data.Item[1].subTitle}}
              </h5>
            </div>
          </div>
          <div class="fyc_img">
            <img  :src="data.Item[1].picUrl"  alt="">
          </div>
        </div>
        <div class="fy_conment">
          <div class="fyc_text">
            <div class="author">
              <img :src="data.Item[0].avatar" alt="">
              <span class="nickName">{{data.Item[0].nickname}}</span>
            </div>
            <div class="article">
              <h5 class="article_tltle ellipsis">
                {{data.Item[0].title}}
              </h5>
              <h5 class="article_con">
                {{data.Item[0].subTitle}}
              </h5>
            </div>
          </div>
          <div class="fyc_img">
            <img  :src="data.Item[0].picUrl"  alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    props : {
      data : Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .kc_tuijian
    padding 0 30px 40px
    background-color #fff
    .fy_header
      height 120px
      line-height 120px
      text-align center
      font-size 32px
    .fyg_good
      border 1px solid #d9d9d9
      margin-bottom 30px
      a
        display block
        .fy_img
          width 696px
          height 386px
          position relative
          .tag
            position absolute
            top 20px
            left 20px
            width 130px
            text-align center
            padding 5px 0
            border 1px solid #333
            border-radius 36px
          img
            width 100%
            height 100%


        .fy_text
          padding 24px 20px 67px
          .top
            font-size 36px
            color #333
            display flex
            justify-content space-between
            margin-bottom 19px
          .decs
            font-size 27px
    .fy_conment
      border 1px solid #d9d9d9
      margin-bottom 30px
      display flex
      justify-content: space-between;
      .fyc_text
        padding 0 30px 0 20px
        .author
          margin-top 40px
          .nickName
            display inline-block
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            color #333
            transform scale(.8)
            transform-origin 0 30px
          img
            width 46px
            height 46px
            border-radius 100%
            vertical-align middle
        .article
          .article_tltle
            margin-right 30px
            margin-bottom 30px
            font-size 30px
            padding-top 25px
          .article_con
            display -webkit-box
            -webkit-line-clamp 2;
            -webkit-box-orient vertical;
            overflow hidden
            text-overflow ellipsis;
            font-size 20px
            line-height 36px
            color #7f7f7f
      .fyc_img
        width 280px
        height 272px
        img
          width 280px
          height 272px

</style>
