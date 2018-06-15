<!-- eslint-disable -->
<template>
	<v-footer absolute>
		<v-card flat tile class="flex">
			<v-card-title class="teal white--text justify-center">
				<v-layout row wrap align-center justify-center>
					<v-flex xs10 offset-xs1>
						<strong class="subheading">Suscribete a nuestro newsletter!</strong>
						<v-spacer></v-spacer>
						<v-layout row wrap justify-center>
							<v-flex xs6 sm6 md6>
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
							</v-flex>
							<v-flex xs2 sm2 md2>
								<v-btn round flat prepend-icon="fas fa-save" class='primary'>Suscribir</v-btn>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-flex>
			</v-layout>
		</v-card-title>
		<v-card-text>
			<v-layout>
		</v-layout>
	</v-card-text>
	<v-card-actions class="justify-center" dark>
		<strong>PAGDEV</strong>&copy;2018 — Todos los derechos reservados. 
	</v-card-actions>
</v-card>
</v-footer>
</template>
<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
