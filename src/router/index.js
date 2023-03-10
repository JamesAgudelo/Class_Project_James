import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
import HelpView from '../views/HelpView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import AccesBView from '../views/AccesBView.vue'
import SiUwUView from '../views/SiUwUView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
   path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/help',
     name: 'help',
     component: HelpView

   },
   {
     path: '/info',
      name: 'info',
      component: InfoView
 
    },
    {
      path: '/Quienes somos',
       name: 'Quienes somos',
       component: AboutUsView
  
     },
     {
       path: '/Contactanos',
        name: 'Contactanos',
        component: ContactUsView
   
      },
      {
        path: '/Login',
        name: 'Login',
        component: AccesBView
      },
      {
        path: '/Si',
        name: 'Si',
        component: SiUwUView
      }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
