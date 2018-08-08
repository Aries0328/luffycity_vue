// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    noteList:['XXXX'],
    coursemodel:[],
  },
  mutations:{
    ADDNOTE:function(state,coursemodel){
      state.noteList.push(coursemodel)
    },
  },
  actions:{
    addNote(context,coursemodel){
      axios.get('http://127.0.0.1:8000/api/v1/coursemodel/',function(res){
        console.log(res)
      })
      .then(function(res){
        console.log(res)
        context.commit('ADDNOTE',coursemodel)
      })
      .catch({});
    },
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})

