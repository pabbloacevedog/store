import Vue from 'vue'

export default Vue.component('Hello', {
    name: 'hello',
    data () {
        return {
        	icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
        	rows: [
        	{
        		title: 'Company Name',
        		children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
        	},
        	{
        		title: 'Products',
        		children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
        	},
        	{
        		title: 'Useful Links',
        		children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
        	}
        	],
        	suscribete:''
        }
    },
    methods: {

    }
})
