import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap" // import "./assets/css/src/bootstrap/bootstrap.min.css"
import "./assets/css/style.css" // import "./assets/css/style.css"
// import "./assets/js/base.js"
import "./assets/js/plugins/splide/splide.min.js"

import LoaderBox from "./components/LoaderBox.vue"
import AppBottomMenu from "./components/AppBottomMenu.vue"
import AppHeader from "./components/AppHeader.vue"
import AppSidebar from "./components/AppSidebar.vue"
import SectionWalletCard from "./components/SectionWalletCard.vue"
import ModalDepositActionSheet from "./components/ModalDepositActionSheet.vue"
import FormDeposit from "./components/FormDeposit.vue"
import ModalWithdrawActionSheet from "./components/ModalWithdrawActionSheet.vue"
import ModalSendActionSheet from "./components/ModalSendActionSheet.vue"
import ModalExchangeActionSheet from "./components/ModalExchangeActionSheet.vue"
import SectionStats from "./components/SectionStats.vue"
import SectionStatsSimple from "./components/SectionStatsSimple.vue"
import SectionTransactions from "./components/SectionTransactions.vue"
import SectionMyCards from "./components/SectionMyCards.vue"
import SectionMonthlyBills from "./components/SectionMonthlyBills.vue"
import SectionSavingGoals from "./components/SectionSavingGoals.vue"
import SectionNews from "./components/SectionNews.vue"
import AppFooter from "./components/AppFooter.vue"
import SectionSendMoney from "./components/SectionSendMoney.vue"
import SectionWalletCardSimple from "./components/SectionWalletCardSimple.vue"
import SectionMySubscriptions from "./components/SectionMySubscriptions.vue"
import SectionProductsFeatured from "./components/SectionProductsFeatured.vue"
import ItemPlan from "./components/ItemPlan.vue"
import ItemSubscription from "./components/ItemSubscription.vue"

axios.defaults.withCredentials = true
axios.defaults.baseURL = '/api.php';

// axios.interceptors.response.use(function (response) {
//   if (response.headers['x-xsrf-token']) {
//     console.log(response.headers['x-xsrf-token'])
//     document.cookie = 'XSRF-TOKEN=' + response.headers['x-xsrf-token'] + '; path=/';
//   }
//   return response;
// });

console.log('Creando validacion de Router')
await store.dispatch('loadUser')
router.beforeEach(async (to, from, next) => {
  console.log('validando session para router')
  console.log('isAuthenticated', store.getters.isAuthenticated)
  console.log('Start')
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('ReqAuth...')
    if (store.getters.isAuthenticated) {
      console.log('Conectado...')
      next()
    } else {
      console.log('No Conectado...')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
  console.log('End')
  // next()
})

const app = createApp(App)

app.use(store)
app.use(router)

app.component('LoaderBox', LoaderBox)
app.component('AppBottomMenu', AppBottomMenu)
app.component('AppHeader', AppHeader)
app.component('AppSidebar', AppSidebar)
app.component('SectionWalletCard', SectionWalletCard)
app.component('ModalDepositActionSheet', ModalDepositActionSheet)
app.component('ModalWithdrawActionSheet', ModalWithdrawActionSheet)
app.component('ModalSendActionSheet', ModalSendActionSheet)
app.component('ModalExchangeActionSheet', ModalExchangeActionSheet)
app.component('SectionStats', SectionStats)
app.component('SectionTransactions', SectionTransactions)
app.component('SectionMyCards', SectionMyCards)
app.component('SectionMonthlyBills', SectionMonthlyBills)
app.component('SectionSavingGoals', SectionSavingGoals)
app.component('SectionNews', SectionNews)
app.component('AppFooter', AppFooter)
app.component('SectionSendMoney', SectionSendMoney)
app.component('SectionWalletCardSimple', SectionWalletCardSimple)
app.component('SectionStatsSimple', SectionStatsSimple)
app.component('SectionMySubscriptions', SectionMySubscriptions)
app.component('SectionProductsFeatured', SectionProductsFeatured)
app.component('FormDeposit', FormDeposit)
app.component('ItemSubscription', ItemSubscription)
app.component('ItemPlan', ItemPlan)
app.component('ItemSubscription', ItemSubscription)


app.mount("#app")