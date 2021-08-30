import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { VueMaskDirective } from 'v-mask'

Vue.config.productionTip = false

Vue.directive('mask', VueMaskDirective);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apiUrl: "http://localhost:3000",
    especialidades: ["Oftamologista", "Pediatra", "Oncologista"],
    isLoggedIn: false,
    user: {}
  },
  mutations: {
    getUser(state) {
        const requestOptions = {method: "GET", credentials: 'include'};
        fetch(`${state.apiUrl}/api/usuarios`, requestOptions)
        .then(response => {
        if (response.status == 201) {
            response.json()
            .then(data => {
                state.user = data;
                state.isLoggedIn = true;
            });
        }
        else {
          state.user = {};
          state.isLoggedIn = false;
        }  
        })
    }
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App),
  store: store
}).$mount('#app')
