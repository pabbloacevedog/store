import Vue from 'vue'
import {CREATE_USER_MUTATION} from '../../constants/mutations'
import { CATEGORIAS_QUERY } from '../../constants/queries'
import {getUserFromToken} from '../../utils/authService'
export default Vue.component('Registro', {
    $validates: true,
    data () {
        return {
            email: '',
            password: '',
            username: '',
            confirm: '',
            categoria: 0,
            title: 'Registro',
            items: [],
            error: '',
            alert: false
        }
    },
    methods: {
        register () {

            this.categoria = this.categoria.id
            const {email, password, username,categoria} = this
            var self = this
            this.$validator.validateAll()
            // create a new user from our mutation
            this.$apollo.mutate({
                mutation: CREATE_USER_MUTATION,
                variables: {
                    email,
                    password,
                    username
                }
            }).then(response => {
                const tokenId = response.data.userSignup.token
                const userData = getUserFromToken(tokenId)
                self.saveuserData(tokenId, userData.id_user)
                self.$root.$data.user = userData
                self.$root.$data.username = userData.usuario
                self.$router.push('/')

                
            })
            .catch((err) => {
                self.error = err.message.replace('GraphQL error:', '')
                self.alert = !self.alert
            })
        },
        saveuserData (tokenId, userId) {
            localStorage.setItem('token_id', tokenId)
            localStorage.setItem('id_user', userId)
        }
    },

    created () {

    }
})
