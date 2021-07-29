import Vue from 'vue'
import Timeline from '@/components/Timeline'
import Main from '@/components/Main'
import Glossary from '@/components/Glossary'
import Error from '@/components/Error'
import Assumption from '@/components/AssumptionTruth'
import Involvement from '@/components/Involvement'
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
    { path: '/', component: Main },
    { path: '*', component: Error },
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router;