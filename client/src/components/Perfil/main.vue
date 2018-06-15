<template dark>
	<v-container class="espacio_toolbar" >
		<div v-if='user'>
			<v-layout align-center justify-center>
				<v-flex xs12 sm12 md10>
					<v-form>
						<v-layout row wrap align-center justify-center>
							<v-flex xs12 sm12 md12 hidden-xs class="margen flexible fondo-blanco">
								<v-flex d-flex xs12 sm4 md4 class="borde_perfil">
									<v-card color="white" class="sin_sombra">
										<center>
											<v-card-title primary class="title justify-center">
												<v-flex
												xs12
												sm12
												md12
												layout
												align-center
												justify-center
												>
													<v-avatar
													:size="150"
													color="grey lighten-4"
													>
														<img :src="getUser.foto_perfil" alt="avatar">
													</v-avatar>
												</v-flex>
												
											</v-card-title>
										</center>
										<v-card-text class="title">
											<p>{{getUser.usuario}}</p>
										</v-card-text>
									</v-card>
								</v-flex>
								<v-flex d-flex xs12 sm10 md10 >
									<v-card color="white" class="sin_sombra">
										<v-card-title primary-title class="title justify-center">
										</v-card-title>
										<v-card-text class=titlen >
											<div v-if="!getUser.verificado">
												<v-layout row wrap align-center justify-center>
													<v-flex xs12 sm12 md12 class="espacio_input title">
														<p>Necesitas verficar tu cuenta para empezar a utilizarla</p>
													</v-flex>
													<v-flex xs12 sm12 md12class="espacio_input">
														<v-btn round flat prepend-icon="fas fa-save" class='primary'>Reenviar mail</v-btn>
													</v-flex>
												</v-layout>
											</div>
											<div v-else>
												<v-layout row wrap>
													<v-flex xs12 sm12 md12 class="espacio_input alinear-info">
														<v-icon>fas fa-address-card</v-icon>
														<label class="informacion text-sm-left">{{datosUser.rut}}</label>
													</v-flex>
													<v-flex xs12 sm12 md12 class="espacio_input alinear-info">
														<v-icon>far fa-map</v-icon>
														<label class="informacion">{{datosUser.region}}</label>
													</v-flex>
													<v-flex xs12 sm12 md12 class="espacio_input alinear-info" >
														<v-icon>far fa-map</v-icon>
														<label class="informacion">{{datosUser.comuna}}</label>
													</v-flex>
													<v-flex xs12 sm12 md12 class="espacio_input alinear-info">
														<v-icon>fas fa-mars-stroke</v-icon>
														<label class="informacion">{{datosUser.sexo}}</label>
													</v-flex>
													<v-flex xs12 sm12 md12 class="espacio_input alinear-info">
														<v-icon>fas fa-graduation-cap</v-icon>
														<label class="informacion">{{datosUser.nivel_educ}}</label>
													</v-flex>
													<v-flex xs12 sm12 md12 class="espacio_input alinear-info">
														<v-icon>fas fa-mobile-alt</v-icon>
														<label class="informacion">{{datosUser.telefono}}</label>
													</v-flex>
													<v-flex xs12 sm12 md12 class="espacio_input alinear-info">
														<v-icon>fab fa-whatsapp</v-icon>
														<label class="informacion">{{datosUser.whatsapp}}</label>
													</v-flex>
													<v-flex xs12 sm12 md12 class="espacio_input" >
														<a v-bind:href="datosUser.perfil_facebook">
															<v-btn icon>
																<v-icon x-large color="primary">fab fa-facebook-square</v-icon>
															</v-btn>
														</a>
														<a v-bind:href="datosUser.perfil_instagram">
															<v-btn icon>
																<v-icon x-large color="pink">fab fa-instagram</v-icon>
															</v-btn>
														</a>

													</v-flex>
													<v-layout row wrap align-center justify-center>
														<v-btn round flat prepend-icon="fas fa-save" class='primary'>Contactar</v-btn>
													</v-layout>
												</v-layout>
											</div>
										</v-card-text>
										<v-card-actions>
											<v-layout row wrap align-center justify-center>
											</v-layout>
										</v-card-actions>
									</v-card>
								</v-flex>
							</v-flex>
						</v-layout>
					</v-form>
				</v-flex>
			</v-layout>
		</div>
	</v-container>
</template>
<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
