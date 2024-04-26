import '@/assets/scss/style.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import main from './App.vue'
import router from './router/index.js'

const pinia = createPinia()
const app = createApp(main)

app.use(router)
app.use(pinia)

app.mount('#app')
