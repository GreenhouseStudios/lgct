import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import router from './router'
import App from './App.vue'

// Vue.use(VueRouter);
Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')