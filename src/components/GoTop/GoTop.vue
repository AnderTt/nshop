<template>
  <!--返回顶部-->
  <i class="goTop" ref="go"  @click="goTop"></i>
</template>
<script>
  let timer = null //定义初始值
  export default {
    props:{
      step:{   //此数据是控制动画快慢的
        type:Number,
        default:100
      }
    },
    methods:{
      goTop(){ // 动画

        timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop
          let ispeed = Math.floor(-osTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
          this.isTop = true
          if (osTop === 0) {
            clearInterval(timer)
          }
        },30)

      },
    },

    created(){
      let vm =this;
      window.onscroll=function(){
        if (document.documentElement.scrollTop>60) {
          vm.isActive=true;
        }else {
          vm.isActive=false;
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .goTop
    position fixed
    width 82px
    height 82px
    right 30px
    bottom 128px
    background-image url("./images/goTop.png")
    background-repeat no-repeat
    background-size cover
</style>
