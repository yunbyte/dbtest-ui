import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'

import routes from './routes'

import 'font-awesome/css/font-awesome.min.css'

import '@/assets/css/element.scss';
import '@/assets/css/common.scss';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);


const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

