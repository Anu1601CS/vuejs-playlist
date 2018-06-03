// Import Components
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Vuesax from 'vuesax'
import VueResource from 'vue-resource'
import Main from './components/main.vue'
import Content from './components/content.vue'
import Settings from './components/setting.vue'
import Card from './components/card.vue'
import Upload from './components/upload.vue'
import Notification from './components/tools/notification.vue'
import DatePicker from './components/tools/date-picker.vue'
import Breadcrumbs from './components/tools/breadcrumbs.vue'

// Register Components
Vue.component('media-main', Main)
Vue.component('media-content', Content)
Vue.component('media-setting', Settings)
Vue.component('media-card', Card)
Vue.component('media-alert', Notification)
Vue.component('media-upload', Upload)
Vue.component('media-date-picker', DatePicker)
Vue.component('media-date-picker', DatePicker)
Vue.component('media-breadcrumbs', Breadcrumbs)

// Use Components
Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(Vuesax)

// Create the root Vue instance
document.addEventListener("DOMContentLoaded",
    (e) => new Vue({
        el: '#media',
        render: h => h(App)
    })
)
