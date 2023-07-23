import { createApp } from 'vue'
import App from './App.vue'
import *as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faRegualar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faSolid , faRegualar)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
