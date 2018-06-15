import Vue from 'vue'
import {getUserFromToken} from '../../utils/authService'

export default Vue.component('Navegacion', {
    data () {
        return {
            title: 'home',
            navItems: [
            {title: 'Ingresar', icon: 'account_circle', path: '/login', activador: false},
            {title: 'registro', icon: 'person_add', path: '/register',  activador: false}
            ],
            regItems: [
            {title: 'registro', icon: 'person_add', path: '/register',  activador: false}
            ],
            navUser: [
            {title: 'Subir Foto', icon: 'fas fa-camera-retro', path: '/upload', },
            {title: 'Editar perfil', icon: 'far fa-edit', path: '/edit_profile'}
            ],
            getUser: '',
            buscando: '',
            iconBlanco: 'account_circle',
            foto_perfil: '',
            showDrawer: false,
            clipped: false,
            loading: false,
            loader: null,
            token: '',
            total_productos: 5,
            login: false,
            logo_toolbar: '../../static/logo/logo.png',
            drawer: true
        }
    },
    computed: {
        user () {
            this.getUser = this.$root.token
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
        }
    },
    methods: {
        logout () {
            localStorage.removeItem("token")
            localStorage.removeItem("id_user")
            this.$root.token = ''
            this.getUser = ''
            this.$router.push('/')
        }
    }
})
