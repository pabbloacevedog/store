import Vue from 'vue'
import VueApollo from 'vue-apollo'
import router from './router'
import Vuetify from 'vuetify'
import { apolloClient } from './apollo/apollo'

import App from './App'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueApollo)
Vue.use(Vuetify, {
    theme: {
        primary: "#9C27B0",
        secondary: "#F06292",
        accent: "#6A1B9A",
        error: "#E91E63",
        warning: "#ffeb3b",
        info: "#3F51B5",
        success: "#2E7D32"
    }
})

const token = localStorage.getItem('token')

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
})

/* eslint-disable no-new */
new Vue({
    store: store,
    router: router,
    data: {
        token: token
    },
    el: '#app',
    provide: apolloProvider.provide(),
    template: '<App/>',
    components: { App }
})
