import Vue from 'vue';
import Vuex from 'vuex';
import person from './modules/person';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    person,
  },
  strict: process.env.NODE_ENV !== 'production'
});
