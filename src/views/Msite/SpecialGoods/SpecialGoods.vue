<template>
  <section class="special_goods">
    <header class="header">
      <span>专题精选</span>
      <i class="iconfont icon-guanbi01"></i>
    </header>
    <div class="sg_list">
      <ul class="sgUl">
        <li class="sg_item" v-for="(topicItem) in home.topicList">
          <a href="javascript:;">
            <img :src="topicItem.itemPicUrl" alt="">
            <div class="sg_text">
              <div class="top">
                <h4 class="ellipsis title">{{topicItem.subtitle}}</h4>
                <p class="price">{{topicItem.priceInfo}}元起</p>
              </div>
              <p class="decription">{{topicItem.title}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed: {
      ...mapState(['home'])
    },
    mounted() {
      //新品发布
      this._initBScroll()
    },
    methods: {
      _initBScroll() {
        new BScroll('.sg_list', {
          scrollX: true,
          click: true
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .special_goods
    width 100%
    background-color #fff
    padding: 0 30px 36px;
    .header
      height 110px
      font-size 36px
      line-height 110px
      text-align center
    .sg_list
      display flex
      flex-flow row nowrap
      width : 100%
      box-sizing border-box
      overflow hidden
      .sgUl
        display flex
        flex-flow row nowrap
        box-sizing border-box
        flex-shrink 0
        .sg_item
          margin-right 20px
          a
            width 575px
            display block
            font-size 28px
            color #333
            img
              width 100%
              border-radius 8px
              margin-bottom 16px
            .sg_text
              .top
                display flex
                justify-content space-between
                margin-bottom 10px
                .title
                  width 410px
                .price
                  color #b4282d
              .decription
                font-size 24px
                line-height 36px



</style>
