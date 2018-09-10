<template>
  <div class="categoryContainer">
    <div class="cc_wrapper">
      <header class="cc_hd">
        <div class="hd_con">
          <i class="iconfont icon-sousuo"></i>
          <span class="text">搜索商品, 共13256款好物</span>
        </div>
      </header>
      <section class="cc_con">
        <div class="cc_left">
          <div class="ccl_con">
            <ul class="ccl_list">
              <!--on-->
              <li class="li_item" :class="{ on : rightIndex===index }" v-for="(item,index) in category" :key="index" @click="handleClick(index)" >
                <span>{{item.name}}</span>
                <div class="red_block" :class="{ off : rightIndex!==index }"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="cc_right">
          <div class="ccr_con" v-if="category.length">
            <div class="ccr_item1" v-if="!category[rightIndex].level">
              <div class="banner">
                <img :src="category[rightIndex].bannerUrl" alt="">
              </div>
              <div class="ccrs">
                <ul class="ccrsUl">
                  <li v-for="(item,index) in category[rightIndex].subCateList">
                    <img :src="item.bannerUrl"  alt="">
                    <p>{{item.name}}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ccr_item2" v-else>
              <div class="banner">
                <img :src="category[rightIndex].bannerUrl" alt="">
              </div>
              <div class="ccrs">
                <div class="ccrs_item">
                  <h6 class="item_title">{{category[rightIndex].name}}</h6>
                  <ul class="itemUl">
                    <li v-for="(item,index) in category[rightIndex].subCateList" :key="index">
                      <img :src="item.wapBannerUrl" alt="">
                      <p class="name">{{item.name}}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        rightIndex : 0,
      }
    },
    mounted() {
      //获取category
      this.$store.dispatch('getCategory')
    },
    computed : {
      ...mapState(['category'])
    },
    methods : {
      handleClick(index){
        console.log(index)
        this.rightIndex = index;
        console.log(this.category,this.category[this.rightIndex])
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color #fff
  .categoryContainer
    width 100%
    background-color #fff
    .cc_wrapper
      width 100%
      background-color #fff
      .cc_hd
        width 100%
        background-color #fff
        border-bottom 1px solid #f4f4f4
        position fixed
        padding 8px 30px
        box-sizing border-box
        z-index 100
        .hd_con
          margin 10px 0
          width 690px
          height 60px
          line-height 60px
          text-align center
          background-color #f4f4f4
          font-size 28px
          border-radius 5px
          color #666
          .icon-sousuo
            font-size 28px
      .cc_con
        padding-top 100px
        width 100%
        position relative
        padding-bottom 100px
        .cc_left
          background-color #fff
          width 162px
          position fixed
          top 96px
          left 0
          height 100%
          overflow hidden
          .ccl_con
            padding-top 40px
            border 1px solid #f4f4f4
            .ccl_list
              width 162px
              text-align center
              .li_item
                line-height 50px
                height 50px
                margin-top 40px
                font-size 28px
                position relative
                &:first-child
                  margin-top 0
                &:last-child
                  padding-bottom 98px
                &.on
                  color #ab2b2b
                .red_block
                  position absolute
                  left 0px
                  top 0px
                  width 6px
                  height 50px
                  background-color #ab2b2b
                  &.off
                    display none

        .cc_right
          height 100%
          overflow hidden
          margin-left 162px
          .ccr_con
            padding 30px 30px 21px 30px
            .ccr_item1
              padding-bottom 100px
              .banner
                width 528px
                height 192px
                margin-bottom 32px
                img
                  width 100%
                  height 100%
              .ccrs
                .ccrsUl
                  li
                    width 144px
                    height 216px
                    display inline-block
                    margin-right 34px
                    text-align center
                    overflow hidden
                    &:nth-child(3n)
                      margin-right 0
                    img
                      width 144px
                      height 144px
                    p
                      font-size 24px
                      line-height 40px

            .ccr_item2
              .banner
                width 528px
                height 192px
                margin-bottom 32px
                img
                  width 100%
                  height 100%

              .ccrs
                .item_title
                  width 528px
                  height 40px
                  padding-bottom 8px
                  border-bottom 1px solid #f4f4f4
                  font-size 28px
                .itemUl
                  li
                    width 144px
                    height 216px
                    display inline-block
                    margin-right 34px
                    text-align center
                    overflow hidden
                    &:nth-child(3n)
                      margin-right 0
                    img
                      width 144px
                      height 144px
                    p
                      font-size 24px
                      line-height 40px
</style>
