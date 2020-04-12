import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Header from './components/Header.vue'
import Example1 from './components/Example1.vue'
import Example2 from './components/Example2.vue'
import VueCycle from './components/VueCycle.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/test', component: Test },
  { path: '/header', component: Header },
  { path: '/example1', component: Example1 },
  { path: '/example2', component: Example2 },
  { path: '/vuecycle', component: VueCycle }
]

const router = new VueRouter({
  node: 'history',  
  routes // сокращённая запись для `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')