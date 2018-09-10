<template>
  <div class="shopCartContainer">
    <div class="ssc_con">
        <header class="ssc_hd">
          <span class="title">购物车</span>
          <span class="coupon">领券</span>
        </header>
        <section class="ssc_con">
          <div class="ssc_activities">
            <ul class="sscUl">
              <li>
                <i class="iconfont icon-xiaoyuanquan"></i>
                <span>30天无忧退货</span>
              </li>
              <li>
                <i class="iconfont icon-xiaoyuanquan"></i>
                <span>48小时快速退款</span>
              </li>
              <li>
                <i class="iconfont icon-xiaoyuanquan"></i>
                <span>满88元免邮费</span>
              </li>
            </ul>
          </div>
          <div class="cart">
            <div class="cart_con">
              <div class="img"></div>
              <div class="add_login">
                <p class="add">去添加点什么吧</p>
                <div class="login">登录</div>
              </div>
            </div>

          </div>
        </section>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shopCartContainer
    width 100%
    .ssc_con
      width 100%
      text-align center
      position relative
      .ssc_hd
        width 100%
        box-sizing border-box
        padding 0 30PX
        height 88px
        line-height 88px
        background-color #fff
        font-size 36px
        position fixed
        top 0px
        left 0px
        .coupon
          position absolute
          right 58px
          color #B4282D
          font-size 32px
      .ssc_con
        padding-top 88px
        .ssc_activities
          height 70px
          line-height 70px
          .sscUl
            padding 0 30px
            display flex
            justify-content space-around
            li
              .icon-xiaoyuanquan
                display inline-block
                font-size 12px
                transform scale(.4)
                margin-right -10px
        .cart
          position absolute
          left 0px
          top 550px
          right 0px
          margin auto
          .img
            width 248px
            height 248px
            margin 0 auto
            background-image url("./images/cart.png")
            background-repeat no-repeat
            background-position center
            background-size 248px 248px
          .add_login
            .add
              margin-bottom 50px
              color #999
              font-size 28px
            .login
              width 480px
              height 92px
              line-height 92px
              font-size 30px
              background-color #B4282D
              margin 0 auto
              color #fff

</style>
