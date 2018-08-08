import Vue from 'vue'
import Router from 'vue-router'
import Course from '@/components/Course'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {

      path: '/',
      name: '主页',
      component: Index
    },
    {
      path:'/course',
      name:'课程',
      component:Course
    }
  ],
})
