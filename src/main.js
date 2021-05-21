import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from '@/i18n/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import swal from 'vue-sweetalert2';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(i18n)
Vue.use(ElementUI)

// Vue.use(swal)
// const locales = {
//   en: en,
//   zh: zh,
// };
// const messages = {
//   zh
// }
// const i18n = new VueI18n({
//   /** 默认值 */
//   locales,
//   messages
// })
// Vue.config.lang = store.state.lang; // 從 state 獲取預設語言設定。


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
