import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router, bootstrap).mount('#app')