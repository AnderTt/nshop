<template>
  <section class="new_goods">
    <header class="ng_header">
      <a href="javascript:;">
        <p>新品首发</p>
        <div class="look_all">
          <span>查看所有</span><i class="iconfont icon-arrow-right"></i>
        </div>
      </a>
    </header>
    <section class="ng_list">
      <ul class="ngUl">
        <li v-for="(newItem,index) in home.newItemNewUserList" :key="index">
          <a href="javascript:;" class="ng_good">
            <img :src="newItem.listPicUrl" alt="">
            <div class="ng_text">
              <h3 class=" ellipsis">{{newItem.name}}</h3>
              <p class=" ellipsis">{{newItem.simpleDesc}}</p>
              <p class="price">￥{{newItem.retailPrice}}</p>
            </div>
          </a>
        </li>
        <li class="last_li">
          <a href="javascript:;">
            <p>查看全部</p>
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
 export default {
    computed : {
      ...mapState(['home'])
    },
   mounted(){
      //新品发布
     this._initBScroll()
   },
   methods : {
      _initBScroll(){
        new BScroll('.ng_list', {
          scrollX: true,
          click: true
        })
      }
   }
 }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .new_goods
    width 100%
    background-color #fff
    .ng_header
      width 100%
      a
        display block
        background-image url("./images/ng_bg.png")
        background-size: 100% 260px;
        height: 260px
        background-repeat no-repeat
        text-align center
        color: #8BA0B6
        font-size 36px
        p
          padding 80px 0 20px 0
        .look_all
          width 240px
          height 54px
          margin 0 auto
          background-color #D8E5F1
          font-size 30px
          line-height 60px
          text-align center
          .icon-arrow-right
            font-size 20px


    .ng_list
      display flex
      flex-flow row nowrap
      width : 100%
      box-sizing border-box
      overflow hidden
      .ngUl
        display flex
        flex-flow row nowrap
        box-sizing border-box
        flex-shrink 0
        li
          margin-left 30px
          margin-top 30px
          a
            display block
            width 280px
            font-size 28px
            color #333
            .ng_text
              background-color #fff
              h3
                font-weight 400
                margin 10px 0
                line-height 38px
                padding 0 10px
              p
                font-size 24px
                color #7f7f7f
                padding 0 10px
                margin-bottom 14px
              .price
                color #b4282d
                font-size 24px
            img
              width 100%
              background-color #f4f4f4
          &.last_li
            a
              border 8px solid #F4F4F4
              width 280px
              height 280px
              line-height 280px
              text-align center
              box-sizing border-box
              background-color #fff
</style>
