import Vue from 'vue';
import { Button, Pagination } from 'ant-design-vue';
import Viser from 'viser-vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component(Button.name, Button);
Vue.component(Pagination.name, Pagination);


Vue.use(Viser);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
