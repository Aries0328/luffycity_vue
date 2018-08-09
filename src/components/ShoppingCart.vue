<template>
  <div>
    <div class="panel panel-primary">
      <div class="panel-heading">课程列表</div>
      <div class="panel-body">
        <div class="panel panel-default">
          <div class="list-group" v-for="row in shoppingList">
            <h3 class="text-center">{{row.name}}</h3>
            <div class="btn-group btn-group-justified text-center" role="group" aria-label="...">
              <div class="list-group" v-for="ju in row.price_policy">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default">{{ju.valid_period_choices}}</button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default">{{ju.price}}元</button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-success">选择</button>
                </div>
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopping",
    data () {
      return {
        shoppingList:[

        ]
      }
    },
    mounted:function () {
      this.initShopping()
    },
    methods:{
      initShopping:function () {

        let that = this;
        this.$axios.request({
          url:'http://127.0.0.1:8000/api/v1/courses6/',
          method:'GET',
          heards:{'Content-Type:':'application/json',},
          responseType: 'json'
        }).then(function (ret) {
          console.log(ret);
          if(ret.data.code === 1000){
            that.shoppingList = ret.data.data
          }
        }).catch(function (ret) {
        })
      }
    }
  }
</script>

<style>

</style>
