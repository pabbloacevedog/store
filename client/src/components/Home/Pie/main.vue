<!-- eslint-disable -->
<template>
	<v-footer height="auto">
		<v-card flat tile class="flex">
			<v-card-title class="teal white--text justify-center">
				<v-layout row wrap align-center justify-center>
					<center>
					<strong class="subheading">Suscribete a nuestro newsletter!</strong>
					<v-spacer></v-spacer>
					<v-text-field
	                clearable
	                rows="1"
	                flat
	                solo-inverted
	                prepend-icon="search"
	                label="email"
	                v-model="suscribete"
	                class="buscador"
	                ></v-text-field>
	                <v-btn round flat prepend-icon="fas fa-save" class='primary'>Reenviar mail</v-btn>
	                </center>
            	</v-layout>
		</v-card-title>
		<v-card-text class="grey lighten-3">
			<v-layout>
				<v-flex xs4 layout column>
					<span class="body-2">CONTACT</span>
					<v-btn
					v-for="icon in icons"
					:key="icon"
					icon
					dark
					class="mx-3"
					>
					<v-icon size="24px">{{ icon }}</v-icon>
				</v-btn>
				</v-flex>
			<v-flex xs3 layout column>
				<span class="body-2">CONTACT</span>
				<div>
					<v-icon size="18px" class="mr-3">fas fa-home</v-icon>
					New York, NY 10012, US
				</div>
				<div>
					<v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
					info@example.com
				</div>
				<div>
					<v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
					+ 01 234 567 88
				</div>
				<div>
					<v-icon size="18px" class="mr-3">fas fa-print</v-icon>
					+ 01 234 567 89
				</div>
			</v-flex>
		</v-layout>
	</v-card-text>
	<v-card-actions class="grey lighten-2 justify-center">
		<strong>PAGDEV</strong>&copy;2018 — Todos los derechos reservados. 
	</v-card-actions>
</v-card>
</v-footer>
</template>
<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
