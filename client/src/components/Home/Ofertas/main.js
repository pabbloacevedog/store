import Vue from 'vue'

export default Vue.component('Hello', {
    name: 'hello',
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

    }
})
