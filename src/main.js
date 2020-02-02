import Vue from 'vue'
import './pollyfills'
import VueRouter from 'vue-router'
import VueNotify from 'vue-notifyjs'
import VeeValidate from 'vee-validate'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import App from './App.vue'
import { store } from './store'
// Plugins
import GlobalComponents from './gloablComponents'
import GlobalDirectives from './globalDirectives'
import SideBar from './components/UIComponents/SidebarPlugin'
import vuetify from './plugins/vuetify'

// router setup
import routes from './routes/routes'

// library imports

import './assets/sass/paper-dashboard.scss'
import './assets/sass/element_variables.scss'
import './assets/sass/demo.scss'
import fb from './firebase'

import sidebarLinks from './sidebarLinks'
// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalDirectives)
Vue.use(GlobalComponents)
Vue.use(VueNotify)
Vue.use(SideBar, {sidebarLinks: sidebarLinks})
Vue.use(VeeValidate)
locale.use(lang)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(store.state.user)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user !== null && store.state.userProfile !== null) {
      if (to.name === 'Login') {
        next({ path: '/' })
      }
      next()
      return
    }
    next({ path: '/login' })
  } else {
    next()
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  vuetify,
  fb
})
