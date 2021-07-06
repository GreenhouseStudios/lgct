import Vue from 'vue'
import Timeline from '@/components/Timeline'
import Main from '@/components/Main'
import VueRouter from 'vue-router'
Vue.use(
    VueRouter
  )
const routes = [
  { path: '/timeline/:title', component: Timeline },
  { path: '/', component: Main },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;