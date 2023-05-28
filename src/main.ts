import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { pathParams, syncPath } from './pathParams'

createApp(App).mount('#app')

window.addEventListener('DOMContentLoaded', () => {
  syncPath(pathParams())
})

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(
      (document.body.scrollWidth - document.documentElement.clientWidth) / 2,
      (document.body.scrollHeight - document.documentElement.clientHeight) / 2
    )
  }, 50)
})