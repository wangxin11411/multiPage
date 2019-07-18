import Vue from 'vue';
import { Button, Pagination } from 'ant-design-vue';
import G2 from '@antv/g2';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.component(Button.name, Button);
Vue.component(Pagination.name, Pagination);
Vue.config.productionTip = false;
Vue.prototype.$G2 = G2;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
