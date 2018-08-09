<template>
<div>
  <h1>课程列表</h1>
  <ul v-for="row in courseList">
    <li>{{row.id}}、{{row.name}}</li>
  </ul>
  <h1>{{courseList.id}}、{{courseList.name}}</h1>
</div>
</template>

<script>
  export default {
    name: "course",
    data () {
      return {
        courseList:[

        ]
      }
    },
    mounted:function () {
      this.initCourse()
    },
    methods:{
      initCourse:function () {
        // this.courseList = [
        //   {id:1,title:'Python全栈'},
        //   {id:2,title:'Linux运维'},
        //   {id:3,title:'金融分析'},
        // ]
        let that = this;
        this.$axios.request({
          url:'http://127.0.0.1:8000/api/v1/courses/1',
          method:'GET',
          heards:{'Content-Type:':'application/json',},
          responseType: 'json'
        }).then(function (ret) {
          console.log(ret);
          if(ret.data.code === 1000){
            that.courseList = ret.data.data
          }
        }).catch(function (ret) {
        })
      }
    }
  }
</script>

<style scoped>

</style>
