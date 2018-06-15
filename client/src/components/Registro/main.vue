<template>
    <contenedor title='Registro'>
        <v-form @submit="register">
            <v-container>
                <v-layout justify-center>
                    <v-flex xs9 order-md3>
                        <v-text-field required label='Usuario' v-model='username' :error-messages="errors.collect('username')" data-vv-name='username' v-validate="'required'">
                        </v-text-field>
                        <v-text-field required label='Email' v-model='email' :error-messages="errors.collect('email')" data-vv-name='email' v-validate="'required|email'">

                        </v-text-field>
                        <v-text-field required label='password' type='password' v-model='password' name='pwd' data-vv-name='password' :error-messages="errors.collect('password')" v-validate="'required|min:8'">
                        </v-text-field>
                        <v-text-field required label='confirmar' type='password' v-model='confirm' data-vv-name='confirm' :error-messages="errors.collect('confirm')" v-validate="'required|confirmed:pwd'">

                        </v-text-field>

                        <v-select
                        :items="items"
                        v-model="categoria"
                        label="Selecione tipo de usuario"
                        single-line
                        ></v-select>
                        <span class='danger'>{{error}}</span>
                        <span>
                            <router-link  to='/login'>
                                <p>¿Ya tienes una cuenta?</p>
                            </router-link>
                        </span>
                        <v-btn dark  success class='primary' @click='register' raised z-index>Registro</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form >
    </contenedor>
</template>

<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
