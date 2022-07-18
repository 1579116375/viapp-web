import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/scss/bootstrap.scss'
import 'animate.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import '@/assets/scss/style.scss'
import 'bootstrap'
import CoolLightBox from 'vue-cool-lightbox'
import VueScrolllActive from 'vue-scrollactive'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: true
})

const app = createApp(App)

app.use(router)
app.use(CoolLightBox)
app.use(VueScrolllActive)

app.mount('#app')
