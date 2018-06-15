import Vue from 'vue'
import {GET_USER_QUERY} from '../../constants/queries'
import {getUserFromToken} from '../../utils/authService'

export default Vue.component('Perfil', {
    data () {
        return {
            getUser: '',
            iconBlanco: 'account_circle',
            foto_perfil: '../../../static/perfiles/10/perfil.jpg',
            nombre: '',
            nombres: '',
            apellidos: '',
            datosUser: [],
            fotos:[
            { src:'../../../static/perfiles/10/perfil.jpg'},
            { src:'../../../static/perfiles/10/perfil.jpg'},
            { src:'../../../static/perfiles/10/perfil.jpg'},
            { src:'../../../static/perfiles/10/perfil.jpg'},
            { src:'../../../static/perfiles/10/perfil.jpg'}
            ],
            imagenGrande: '../../../static/perfiles/10/perfil.jpg'
        }
    },
    computed: {
        user () {
            const token = localStorage.getItem("token")
            if (token != null) {
                const user = getUserFromToken(token)
                this.getUser = user;
            }
            else{
                this.getUser = '';
                this.$router.push('/')
            }
            return this.getUser
        },
        getUsername () {
        }
    },
    created () {

    }
    // ,
    // destroyed () {
    //     this.getUser = ''
    //     this.$root.$data.username = ''
    // }
})
