import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/views/Top'
import Sub from '@/views/Sub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/sub',
      name: 'Sub',
      component: Sub
    }
  ]
})
