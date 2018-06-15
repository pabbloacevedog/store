import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/main.vue'
import Auth from '@/components/Auth/main.vue'
import Registro from '@/components/Registro/main.vue'
import Perfil from '@/components/Perfil/main.vue'
import Panel from '@/components/Panel/main.vue'
import NotFound from '@/components/NotFound/main.vue'
import Contenedor from '@/components/Contenedor/main.vue'
import VeeValidate from 'vee-validate'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Auth
    },
    {
      path: '/register',
      name: 'Register',
      component: Registro
    },
    {
      path: '/profile',
      name: 'profile',
      component: Perfil
    },
    {
      path: '/container',
      name: 'container',
      component: Contenedor
    },
    {
      path: '/panel',
      name: 'panel',
      component: Panel
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
