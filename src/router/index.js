import Vue from 'vue'
import Router from 'vue-router'
import toDo from '@/components/toDoList'
import howItWork from '@/components/HowItWork'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: toDo
    },
    {
      path: '/how',
      name: 'howItWork',
      component: howItWork
    }
  ]
})
