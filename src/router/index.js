import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home'
import Raffle from '../components/Ruffle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Home
    },
    {
      path: '/raffle',
      name: 'Raffle',
      component: Raffle
    }
  ]
})
