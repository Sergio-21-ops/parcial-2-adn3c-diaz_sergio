import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ver',
    name: 'noticias',
    component: () => import(/* webpackChunkName: "about" */ '../views/NoticiasView.vue')
  },
  {
    path: '/publicar',
    name: 'formulario',
    component: () => import(/* webpackChunkName: "about" */ '../components/PublicarComponente.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
