<template>
  <div id="app">
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">

          <!-- router链接 -->
          <router-link
           v-for="(route,index) in all_routes"
           v-bind:key="index"
           v-bind:to="route.path"
           activeClass='active'
           tag="li"
           exact
           >
           <a>{{route.name}}</a>
          </router-link>

        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">登录</a></li>
          <li><a href="#">注册</a></li>

        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>

  <router-view/>


</div>



</template>

<script>

export default {
  name: 'App',
  data:function(){
    return{}
  },
  computed:{
    all_routes:function(){
      return this.$router.options.routes
    },
  }
}
</script>

<style>
</style>
