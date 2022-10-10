import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuitify.js'
import rootStore from './store/index.js'

Vue.use(Vuex);

const store = new Vuex.Store(rootStore);

new Vue({
  store,
  vuetify,
  el: '#app',
  render: (h) => h(App)
})
