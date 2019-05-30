import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import formvue from '@/element/form'
import edit from '@/edit/edit'


import axios from 'axios'

Vue.use(Router)
Vue.prototype.$http = axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/formvue',
      name: 'formvue',
      component: formvue
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    }
  ]
})
