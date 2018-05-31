// Import Components
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import Main from './components/main.vue'
import Content from './components/content.vue'

// Register Components
Vue.component('anurag', Main)
Vue.component('media-content', Content)

// Use Components
Vue.use(VueResource)
Vue.use(Vuetify)

// Create the root Vue instance
document.addEventListener("DOMContentLoaded",
    (e) => new Vue({
        el: '#media',
        render: h => h(App)
    })
)
