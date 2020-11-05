<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Chilanka;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  margin-top: 60px;
  font-size: large;
}
body{
  background: url("assets/img/back.jpeg") 100%;

}
  ul{
  list-style-type: none;

  }
</style>
