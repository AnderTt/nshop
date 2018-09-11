<template>
  <!--swiper-->
  <div class="swiper-container">
    <div class="swiper-wrapper" v-if="home">
      <div class="swiper-slide" v-for="slide in home.focusList" :key="slide.id">
        <img v-lazy="slide.picUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    computed : {
      ...mapState(['home']),

    },
    mounted(){
      //轮播图
      this. _initSwiper();
    },
    watch : {
      home(){
        this.$nextTick(()=>{
          this. _initSwiper();
        })
      }
    },
    methods : {
      _initSwiper(){
        new Swiper('.swiper-container', {
          initialSlide :0,
          loop: true,
          autoplay: true,
          /*observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper*/
          pagination: {
            el: '.swiper-pagination',
          },
        });
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    height auto
    .swiper-wrapper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .swiper-pagination-bullet
      width 40px
      height 4px
      opacity .4
      border-radius 0
</style>
