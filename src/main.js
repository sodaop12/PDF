import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (localStorage.getItem('isAuthenticated') === '1') {
    store.commit('SET_AUTHENTICATED', true);
    store.commit('SET_USER', localStorage.getItem('user'))
    store.commit('SET_USERNAME',localStorage.getItem('username'))
}

createApp(App).use(store).use(router).mount('#app')
