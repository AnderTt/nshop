<template>
  <!--返回顶部-->
  <i class="goTop" ref="go" @click="goTop"></i>
</template>
<script>
  export default {
    methods: {
      goTop(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
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
