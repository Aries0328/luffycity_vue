<template>
  <div><h1>{{msg}}</h1></div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 111,
    }
  },
  mounted:function () {
    this.msg = 4;
    console.log(this.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
