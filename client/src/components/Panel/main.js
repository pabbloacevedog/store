import Vue from 'vue'
import {GET_USER_QUERY} from '../../constants/queries'

export default Vue.component('Panel', {
    data () {
        return {
            getUser: ''
        }
    },
    computed: {
        user () {
            const isLogin = this.$root.$data.user
            const role = this.$root.$data.user.role
            debugger
            if (!isLogin) {

                this.getuser = ''
                this.$router.push('/')
            }
            if (role != 'admin') {
                this.$router.push('/perfil')
            }
            this.getUser = this.$root.$data.username
            this.getUsername
            return isLogin
        },
        getUsername () {
        }
    },
    created () {
        this.$apollo.addSmartQuery('getUser', {
            query: GET_USER_QUERY,
            manual: true,
            result ({loading, data}) {
                if (!loading) {
                    this.getUser = data.getUser.username
                    this.$root.$data.username = data.getUser.username
                }
            },
            update: (data) => {
                console.log(data)
                return data.getUser.username
            }
        })
    },
    destroyed () {
        this.getUser = ''
        this.$root.$data.username = ''
    }
})
