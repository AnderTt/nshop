<template>
  <div class="more_exciting">
    <div class="me_title">
      <div class="me_text">
        <p class="text">更多精彩</p>
      </div>
    </div>
    <div class="me_content">
      <div class="me_item" v-for="(item,index) in data" :key="index">
        <div class="me_img">
          <img :src="item.itemPicUrl" alt="">
        </div>
        <p class="title">{{item.subtitle}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props : {
      data : Array
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .more_exciting
    margin 0 30px 30px 30px
    .me_title
      height 140px
      display flex
      align-items center
      .text
        margin 0 24px
        font-size 28px
      &:before
        content ' '
        display block
        width: 264px
        height 1px
        background-color #d9d9d9
      &:after
        content ' '
        display block
        width: 264px
        height 1px
        background-color #d9d9d9;

    .me_content
      .me_item
        padding 24px
        background-color #fff
        margin-bottom 20px
        .me_img
          width 642px
          height 360px
          img
            width 100%
            height 100%
        .title
          padding 24px 0
          font-size 30px
          line-height 50px
      .me_item1
        padding 24px
        background-color #fff
        margin-top 30px
        .me_imgs
          width 642px
          height 360px
          .middle_img
            width 460px
            height 360px
            float left
            img
              width 100%
              height 100%
          .small_imgs
            width 178px
            float right
            img
              width 178px
              height 178px
        .title
          padding 24px 0
          font-size 30px
</style>
