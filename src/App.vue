<template>
  <div id="app">
    <router-view/>
    <footer-nav v-if="this.$route.meta.isShowFooter"/>
    <!--遮罩层6-->
  </div>
</template>

<script>
  import FooterNav from './components/Footer/Footer.vue';
  export default {
    components : {
      FooterNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
</style>
