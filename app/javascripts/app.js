import Vue from 'vue/dist/vue.esm.js';
import MyApp from './MyApp.vue';

new Vue({
  el: '#app',
  components: {
    MyApp,
  },
  template: '<my-app></my-app>',
});