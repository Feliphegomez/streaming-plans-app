import axios from 'axios';
import store from '@/store'
import { compileAsync } from 'sass'

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import RechargeView from '../views/RechargeView.vue'
import TransactionsView from '../views/TransactionsView.vue'
import TransactionDetailsView from '../views/TransactionDetailsView.vue'
import MySubscriptionsView from '../views/MySubscriptionsView.vue'
import ExploreView from '../views/ExploreView.vue'
import PlanDetailsView from '../views/PlanDetailsView.vue'
import MeSettingsView from '../views/MeSettingsView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import MeAccountView from '../views/MeAccountView.vue'
import SupportView from '../views/SupportView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'

const routes = [
  {
    path: '/login',
    name: 'app-login',
    component: LoginView,
    meta: { guest: true },
  },
  {
    path: '/register',
    name: 'app-register',
    component: RegisterView,
    meta: { guest: true },
  },
  {
    path: '/',
    name: 'app-home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/recharge',
    // name: 'app-recharge-view',
    component: RechargeView,
    meta: { requiresAuth: true },
    children: [
      {
        path: ':hash',
        name: 'app-recharge-view',
        component: RechargeView,
        meta: { requiresAuth: true }
      },
    ]
  },
  {
    path: '/notifications',
    name: 'app-notifications',
    component: NotificationsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/explore',
    name: 'app-explore',
    component: ExploreView,
    meta: { requiresAuth: true }
  },
  {
    path: '/transactions',
    name: 'app-transactions',
    component: TransactionsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/transaction/:hash',
    name: 'app-transaction-details',
    component: TransactionDetailsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/plan/:plan_id',
    name: 'app-plan-details',
    component: PlanDetailsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/me/subscriptions',
    name: 'app-me-subscriptions',
    component: MySubscriptionsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/me/settings',
    name: 'app-me-settings',
    component: MeSettingsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/me/change-password',
    name: 'app-me-change-password',
    component: ChangePasswordView,
    meta: { requiresAuth: true }
  },
  {
    path: '/me/account',
    name: 'app-me-account',
    component: MeAccountView,
    meta: { requiresAuth: true }
  },
  {
    path: '/support',
    name: 'app-me-support',
    component: SupportView,
    meta: { requiresAuth: true }
  },
  {
    path: '/app-components',
    name: 'app-components',
    component: ComponentsView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

console.log('Creando Router')
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


// router.beforeEach(async (to, from, next) => {
//   console.log('clear::aqui')
//   let sStatus = await store.getters.sessionState
//   console.log('sStatus', sStatus)
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     console.log('req auth')
//     if (store.getters.sessionState == 'connected') {
//       next()
//       return
//     }
//     next('/login')
//   } 
//   else if (to.matched.some((record) => record.meta.guest)) {
//     console.log('req guest')
//     if (store.getters.sessionState == 'connected') {
//       next("/about");
//       return;
//     }
//     next();
//   } 
//   else {
//     next();
//   }
// })

export default router
