<template>
 <div class="profileContainer">
   <div class="pc_wrapper">
     <HeaderTop/>
     <div class="pc_con">
       <div class="login">
         <img src="./images/yanxuan.png" alt="">
       </div>
       <div class="phone_mail_login">
         <!--登录方式-->
         <div class="pm_con" v-if="isPerson">
           <div class="phone_login" @click="goPhone">
             <i class="iconfont icon-shouji"></i>
             <span>手机号码登录</span>
           </div>
           <div class="mail_login"  @click="goMail">
             <i class="iconfont icon-youjian"></i>
             <span>邮箱账号登陆</span>
           </div>
           <div class="phone_fast">
             <span>手机快捷注册</span>
             <i class="iconfont icon-arrow-right"></i>
           </div>
         </div>
         <!--登陆方式的具体页面-->
         <div class="phone_mail_con" v-else>
           <div class="phone_con" v-if="isPhone" >
             <div class="phone">
               <input type="text" placeholder="请输入手机号" v-model="phone">
             </div>
             <div class="yzm">
               <input type="text" placeholder="请输入短信验证码"  v-model="yzm">
               <div class="huoqu">获取验证码</div>
             </div>
             <div class="text">
               <span>遇到问题？</span>
               <span>使用短信验证登录</span>
             </div>
             <div class="toLogin">
               <div class="phLogin" @click="login">登录</div>
               <div class="otherLogin" @click="isPerson=!isPerson">其他方式登录</div>
             </div>
             <div class="register">注册账号></div>
           </div>
           <div class="mail_con" v-else>
             <div class="mail">
               <input type="text" placeholder="请输入邮箱账号" v-model="mail">
             </div>
             <div class="yzm">
               <input type="text" placeholder="密码" v-model="pwd">
             </div>
             <div class="text">
               <span>注册账号</span>
               <span>忘记密码</span>
             </div>
             <div class="toLogin">
              <div class="mlLogin" @click="login">登录</div>
              <div class="otherLogin" @click="isPerson=!isPerson">其他方式登录</div>
             </div>
           </div>
         </div>

       </div>
       <div class="login_ways" v-if="isPerson" >
         <span><i class="iconfont icon-weixin"></i>微信</span>
         <span>|</span>
         <span><i class="iconfont icon-qq"></i>QQ</span>
         <span>|</span>
         <span><i class="iconfont icon-weibo"></i>微博</span>
       </div>
     </div>
   </div>
 </div>
</template>
<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import {Toast,MessageBox} from 'mint-ui'
  export default {
    data(){
      return {
        isPerson : true,
        isPhone : true,//标识是点击的手机登录
        phone : '',
        pwd : '',
        mail : '',
        yzm : '',
      }
    },
    components : {
      HeaderTop
    },
    methods : {
      goPhone(){
        this.isPerson = false;
      },
      goMail(){
        this.isPerson = false;
        this.isPhone = false;
      },
      showAlert(msg){
        MessageBox.alert(msg)
      },
      login(){
        if(this.isPhone){
          //前台短信登陆验证
          const phoneReg = /^1\d{10}/;
          if(!phoneReg.test(this.phone)){
            this.showAlert('请输入正确的电话号码');
            return
          }else if(!/^\d{6}$/.test(this.yzm)){
            this.showAlert('请输入正确的短信验证码');
            return
          }
        }else {
          //邮箱登录
          const mailReg =/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
          if(!mailReg.test(this.mail)){
            this.showAlert('请输入正确的邮箱');
            return
          }else if(!/^\d{6}$/.test(this.pwd)){
            this.showAlert('请输入正确的密码');
            return
          }
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color #fff
  .profileContainer
    width 100%
    overflow hidden
    position relative
    background-color #fff
    .pc_wrapper
      .pc_con
        padding-top 88px
        .login
          padding 160px 0
          text-align center
          img
            width 268px
            height 90px

        .phone_mail_login
          padding 0 40px
          .pm_con
            .phone_login,.mail_login
              width 670px
              height 98px
              line-height 92px
              text-align center
              font-size 30px
              margin-bottom 32px
              border 1px solid #b4282d
              background-color #b4282d
              color #fff
              .icon-shouji
                font-size 40px
                display inline-block
                vertical-align middle
              .icon-youjian
               font-size 40px
               display inline-block
               vertical-align -5px
            .mail_login
              background-color transparent
              color #b4282d
            .phone_fast
              text-align center
              font-size 30px

        .phone_mail_con
          margin-top -60px
          .phone_con
            .phone,.yzm
              width 670px
              height 98px
              line-height 92px
              text-align center
              font-size 30px
              border-bottom 1px solid #c5cddb
              position relative
              input
                display block
                width 100%
                height 100%
                font-size 26px
                outline none
              .huoqu
                position absolute
                top 16px
                right 15px
                width 168px
                height 60px
                line-height 60px
                font-size 28px
                border 1px solid #333
                border-radius 5px

             .text
               display: flex
               justify-content space-between
               margin-top 60px
               font-size 28px
             .toLogin
               margin-top 60px
               div
                width 670px
                height 98px
                line-height 92px
                text-align center
                font-size 30px
                margin-bottom 24px
                border 1px solid #b4282d
                background-color #b4282d
                color #fff
                &.otherLogin
                  background-color #fff
                  color: #b4282d
            .register
              text-align center
              font-size 30px

          .mail_con
            .mail,.yzm
              width 670px
              height 98px
              line-height 92px
              text-align center
              font-size 30px
              border-bottom 1px solid #c5cddb
              position relative
              input
                display block
                width 100%
                height 100%
                font-size 26px
                outline none
              .huoqu
                position absolute
                top 16px
                right 15px
                width 168px
                height 60px
                line-height 60px
                font-size 28px
                border 1px solid #333
                border-radius 5px

            .text
              display: flex
              justify-content space-between
              margin-top 60px
              font-size 28px
            .toLogin
              margin-top 60px
              div
                width 670px
                height 98px
                line-height 92px
                text-align center
                font-size 30px
                margin-bottom 24px
                border 1px solid #b4282d
                background-color #b4282d
                color #fff
                &.otherLogin
                  background-color #fff
                  color: #b4282d
            .register
              text-align center
              font-size 30px

        .login_ways
          text-align center
          padding-top 420px
          font-size 30px
          color #7F7F7F
          span:nth-child(2n)
            margin 0 40px


</style>
