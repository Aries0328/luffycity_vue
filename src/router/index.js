import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Course from '@/components/Course'
import ShoppingCart from '@/components/ShoppingCart'


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/course',
      name: 'course',
      component: Course
    },
     {
      path:'/shopping',
      name: 'shopping',
      component: ShoppingCart
    },

  ]
})
