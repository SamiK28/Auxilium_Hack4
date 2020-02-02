import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import MenuEdit from '../components/Dashboard/Views/Pages/MenuEdit'
import Calendar from '../components/Dashboard/Views/Calendar/Calendar'
import stats from '../components/Dashboard/Views/Dashboard/stats'
import {store} from '../store'
import UserProfileEdit from '../components/Dashboard/Views/Pages/UserProfileEdit'
import UserProfile from '../components/Dashboard/Views/Pages/UserProfile'
import Register from '../components/Dashboard/Views/Pages/Register'
import home from '../components/Dashboard/Views/Pages/home'
import ongoing from '../components/Dashboard/Views/Pages/ongoing'
import previous from '../components/Dashboard/Views/Pages/previous'
import Order from '../components/Dashboard/Views/Pages/Order'

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}
let register = {
  path: '/register',
  name: 'Register',
  component: Register
}
let routes = [
  {
    path: '/',
    component: DashboardLayout,
    meta: {
      requiresAuth: true
    },
    redirect: '/newDonation',
    children: [
      {
        path: 'newDonation',
        name: 'New-Donation',
        component: home
      },
      {
        path: '/newDonation/:campaign',
        name: 'Campaign',
        props: true,
        component: Order
      },
      {
        path: 'previous',
        name: 'Previous-Donations',
        component: previous
      },
      {
        path: 'support',
        name: 'Support',
        component: MenuEdit
      },
      {
        path: 'editprofile',
        name: 'Edit Profile',
        component: UserProfileEdit
      },
      {
        path: 'my-profile',
        name: 'My Profile',
        component: UserProfile
      }
    ]
  },
  register,
  loginPage,
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/
export default routes
