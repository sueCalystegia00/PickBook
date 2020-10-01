import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../views/Book.vue'
import Resistration from '../views/Resistration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Book',
    component: Book
  },
  {
    path: '/resistration',
    name: 'Resistration',
    component: Resistration
  },
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
