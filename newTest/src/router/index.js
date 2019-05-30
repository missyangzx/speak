import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
      name: 'login',
      component: resolve => require(["@/views/login"],resolve)
  	},
    {
      path: '/app',
      name: 'app',
      component: resolve => require(["@/views/app"],resolve),
      redirect: "/app/form",
      children: [
      	{
      		path: "form",
      		name: "form",
      		component: resolve => require(["@/components/form/form"],resolve)
      	}
      ]
    }
  ]
})
