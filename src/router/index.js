import Vue from 'vue'
import Timeline from '@/components/Timeline'
import Landing from '@/components/Landing'
import VueRouter from 'vue-router'
Vue.use(
    VueRouter
  )
const routes = [
  { path: '/timeline', component: Timeline },
  { path: '/', component: Landing },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;