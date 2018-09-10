<template>
  <section class="ten_past_quarter">
    <header class="tpq_header">十点一刻</header>
    <div class="toq_wrapper">
      <ul class="tpq_list">
        <li class="today_session" v-for="(item,index) in data" :key="index">
          <p class="today">-今日话题-</p>
          <h5 class="session">{{item.desc}}</h5>
          <p class="utils">{{item.title}}</p>
          <div class="avatar" >
            <div class="avatar_images">
              <div class="ai_item">
                <img src="./images/avatar_01.png" alt="">
              </div>
              <div class="ai_item"  v-for="(avatar,index) in item.participantAvatar" v-if="(/(.jpg)$/).test(avatar)"  :key="index">
                <img  :src="avatar">
              </div>
              <div class="ai_item">
                <i class="iconfont icon-shenglvehao"></i>
              </div>
            </div>
            <p>978人参与话题</p>
          </div>
        </li>
        <li class="look_more">
          查看更多好题
          <i class="iconfont icon-guanbi01"></i>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props : {
      data : Array
    },
    mounted(){
      //十点一刻
      this._initBScroll()
    },
    computed : {
      /*avatarArr(){
        let avas = [];
        this.data.forEach((item)=>{
          let avatars = item.participantAvatar.filter((avatar)=> avatar)
          console.log(avatars)
          return avatars
        });

      }*/
    },
    methods : {
      _initBScroll(){
        new BScroll('.toq_wrapper', {
          scrollX: true,
          click: true
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .ten_past_quarter
    width 100%
    background-color #fff
    .tpq_header
      height 120px
      line-height 120px
      text-align center
      font-size 32px
    .toq_wrapper
      padding-bottom 40px
      overflow hidden
      width 100%
      display flex
      flex-flow row nowrap
      box-sizing border-box
      .tpq_list
        display flex
        flex-flow row nowrap
        flex-shrink 0
        padding-left 30px
        .today_session
          width 560px
          height 400px
          text-align center
          background-image url("./images/ten_bg.png")
          background-repeat no-repeat
          background-size 100% 100%
          margin-right 30px
          position relative
          flex-shrink 0
          .today
            margin-bottom 40px
            margin-top 40px
          .session
            font-size 36px
            font-weight 700
            margin-bottom 28px
          .utils
            font-size 28px
          .avatar
            position absolute
            top 284px
            left 120px
            width 500px
            text-align center
            display flex
            overflow hidden
            .avatar_images
              display flex
              .ai_item
                width 48px
                height 48px
                .icon-shenglvehao
                  font-size 48px
                  color #c37000
                img
                  width 100%
                  height 100%
                  border-radius 100%
            p
              margin-top 20px
              margin-left 10px
        .look_more
          flex-shrink 0
          width 540px
          height 350px
          line-height 350px
          text-align center
          border 10px solid #e6e6e6
</style>
