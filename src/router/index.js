import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'Search',
      component: Home
    }
  ]
})
