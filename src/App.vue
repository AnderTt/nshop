<template>
  <div id="app">
    1111
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    mounted(){
      axios.get('/category')
        .then(res=>{
          console.log(res.data)
        })
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
