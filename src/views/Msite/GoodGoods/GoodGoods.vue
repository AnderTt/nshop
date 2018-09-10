<template>
  <section class="goods_list">
    <div class="gl_item" v-for="(cates,index) in home.cateList" :key="index">
      <h3>{{cates.name}}好物</h3>
      <ul class="gl_list">
        <li v-for="(cate,index) in cates.itemList" v-if="index<7"  :key="cate.id">
          <a href="javascript:;">
            <div class="gl_hd">
              <img :src="cate.listPicUrl">
              <p class="description ellipsis"><span>{{cate.simpleDesc}}</span></p>
            </div>
            <div class="gl_tag" v-if="cate.tagName">
              <span>满折</span>
            </div>
            <div class="gl_title ellipsis">{{cate.name}}</div>
            <div class="gl_price">￥{{cate.retailPrice}}</div>
          </a>
        </li>
        <li class="more">
          <a href="javascript:;">
            <p>{{cates.name}}好物</p>
            <span class="icon"><i class="iconfont icon-guanbi01"></i></span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
 import {mapState} from 'vuex'
 export default {
   computed : {
     ...mapState(['home']),
   }
 }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .goods_list
    width 100%
    .gl_item
      background-color #fff
      h3
        height 120px
        font-size 36px
        line-height 120px
        text-align center
      .gl_list
        width 100%
        font-size 0
        li
          padding 0 10px 33px 20px
          width 345px
          display inline-block
          a
            display block
            width 100%
            .gl_hd
              img
                width 100%
                background-color #f4f4f4
              .description
                padding 20px 10px
                background-color rgb(241, 236, 226)
                color #9F8A60
                font-size 16px
                span
                  display inline-block
                  transform scale(0.9)
                  transform-origin 0 0
            .gl_tag
              padding-left 10px
              margin 20px 0 0 4px
              font-size 16px
              span
                display inline-block
                background-color #f48f18
                padding 6px 16px
                color #fff
                border-radius 4px
            .gl_title
              font-size 28px
              margin-top 10px
              padding 0 10px
              line-height 48px
              color #333
            .gl_price
              padding 5px 10px
              color #b4282d
              font-size 28px
          &.more
            width 345px
            display inline-block
            position: absolute;
            right 0
            font-size 36px
            height 414px
            text-align center
            a
              display block
              padding 128px 0
              background-color #f4f4f4
              .icon
                margin-top 60px
                display inline-block
                .icon-guanbi01
                  font-size 60px
</style>
