import Vue from 'vue'
import Timeline from '@/components/Timeline'
import Main from '@/components/Main'
import Glossary from '@/components/Glossary'
import Error from '@/components/Error'
import Assumption from '@/components/AssumptionTruth'
import Involvement from '@/components/Involvement'
import About from '@/components/About'
import Resources from '@/components/Resources'
import Vignettes from '@/components/Vignettes'
import VueRouter from 'vue-router'
Vue.use(
    VueRouter
)
const routes = [
    { path: '/timeline/:title', component: Timeline },
    { path: '/glossary/:word', component: Glossary },
    { path: '/glossary/', component: Glossary },
    { path: "/assumption/", component: Assumption },
    { path: "/involvement/", component: Involvement },
    { path: "/about/", component: About },
    { path: "/resources/", component: Resources },
    { path: "/vignettes/", component: Vignettes },
    { path: '/', component: Main },
    { path: '*', component: Error },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    scrollBehavior (to, from, savedPosition) {
        console.log(to + from + savedPosition)
        if (savedPosition) {
            return savedPosition
          } else {
            return { x: 0, y: 0 }
          }
      }
})


export default router;