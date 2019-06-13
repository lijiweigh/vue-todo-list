<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./config/rem"

export default {
  name: 'app',
  
}
</script>

<style>
@import "./style/reset.css";

body {
    min-height: 100%;
    background-color: #f1f2f3;
}
#app {
    
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}
</style>
