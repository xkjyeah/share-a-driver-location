import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { pathParams, syncPath } from './pathParams'

createApp(App).mount('#app')

window.addEventListener('DOMContentLoaded', () => {
  syncPath(pathParams())
})