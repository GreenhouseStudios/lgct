import Vue from 'vue'
import Timeline from '@/pages/Timeline'
import Main from '@/pages/Main'
import Glossary from '@/pages/Glossary'
import Error from '@/components/Error'
import Assumption from '@/pages/AssumptionTruth'
import Involvement from '@/pages/Involvement'
import About from '@/pages/About'
import Resources from '@/pages/Resources'
import Vignettes from '@/pages/Vignettes'
import Preview from '@/components/Preview'
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
    { path: "/parcels/", component: Vignettes },
    { path: "/main/", component: Main },
    { path: '/', component: Date.now() < new Date(2021, 9, 11, 12, 0, 0, 0) ? Preview : Main },
    { path: '*', component: Error },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})


export default router;