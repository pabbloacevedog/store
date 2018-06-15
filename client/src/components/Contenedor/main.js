import Vue from 'vue'

export default Vue.component('Contenedor', {
	props: {
		title: {
			type: String,
			required: true
		},
		source: String,
		title: ''
	}
})
