<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/course">课程</router-link>
    <router-link to="/shopping">购课</router-link>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
