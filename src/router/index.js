import Vue from 'vue'
import Router from 'vue-router'
import hero from '../components/hero.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hero',
      component: hero
    }
  ]
})
