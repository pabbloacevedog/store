import Vue from 'vue'
import Carrusel from './Carrusel/main.vue'
import Ofertas from './Ofertas/main.vue'
import Productos from './Productos/main.vue'
import Pie from './Pie/main.vue'

export default Vue.component('Home', {
    name: 'home',
    data () {
        return {
            getUser: '',
            items: [
                {
                    src: '/static/carrusel/1.jpg'
                },
                {
                    src: '/static/carrusel/2.jpg'
                },
                {
                    src: '/static/carrusel/3.jpg'
                },
                {
                    src: '/static/carrusel/4.jpg'
                },
                {
                    src: '/static/carrusel/5.png'
                }
            ]
        }
    },
    computed: {
        user () {
        	const isLogin = this.$root.$data.user
        	if (!isLogin) {
        		this.getuser = ''
        		this.$router.push('/')
        	}
        	else{
        		this.getUser = this.$root.$data.username
        		this.getUsername
        	}
        	return isLogin
        }
    },
    methods: {

    },
    components: {
        Carrusel,
        Ofertas,
        Pie
    }
})
