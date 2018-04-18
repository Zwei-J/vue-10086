import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main/main'
import Me from '@/components/me/me'
import Business from '@/components/business/business'
import BusinessChild from '@/components/business/business-child/business-child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/service',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      component: Main
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/business',
      component: Business,
      children: [
        {
          path: '/',
          component: BusinessChild
        }
      ]
    }
  ]
})
