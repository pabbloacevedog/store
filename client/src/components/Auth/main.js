import Contenedor from '../Contenedor/main.vue'
import {LOGIN_QUERY} from '../../constants/queries'
import {getUserFromToken} from '../../utils/authService'
import Vue from 'vue'

export default Vue.component('Auth', {
    $validates: true,
    data () {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        authenticate () {
            this.$validator.validateAll()
            const {email, password} = this
            var self = this
            this.$apollo.query({

                query: LOGIN_QUERY,
                variables: {
                    email,
                    password
                }
            }).then(response => {
                debugger
                const token = response.data.userLogin.token
                const userData = getUserFromToken(token)
                self.saveuserData(token, userData.id_user)
                self.$root.token= token
                self.$router.push('/profile')

                
            }).catch(err => {

                self.error = err.message.replace('GraphQL error:', '')
                self.alert = !self.alert
            })
        },
        saveuserData (token, userId) {
            localStorage.removeItem("token")
            localStorage.removeItem("id_user")  
            localStorage.setItem('token', token)
            localStorage.setItem('id_user', userId)
        }
    },
    components: {
        Contenedor
    },

    created () {

    },
    mounted () {

    },
    updated () {
    }

})
