import Vue from 'vue'
// import { GREETING_QUERY } from '../../constants/queries'
export default Vue.component('NotFound', {
    name: 'NotFound',
    data () {
        return {
            msg: 'NotFound',
            serverMessage: ''
        }
    },
    methods: {
        insertGreeting () {
            // this.$apollo.query({
            //     query: GREETING_QUERY
            // }).then(result => {
            //     this.serverMessage = result.data
            // })
        }
    }
})
