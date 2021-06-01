import { createApp } from 'vue'
import template from './template'
import router from './router'

createApp(template)
  .use(router)
  .mount('#app')

