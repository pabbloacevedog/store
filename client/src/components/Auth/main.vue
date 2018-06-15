<template>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark >
                        <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
                    </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field required v-model='email' label='Email' :error-messages="errors.collect('email')" data-vv-name="email" v-validate="'required|email'">
                        </v-text-field>
                        <v-text-field required label='password' v-model="password" type='password' :error-messages="errors.collect('password')" data-vv-name="password" v-validate="'required|min:5'">
                        </v-text-field>
                        <span class='danger'>{{error}}</span>
                        <span>
                            <router-link  to='/register' tag='span'>
                                <p>No tengo cuenta</p>
                            </router-link>
                        </span>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn dark class='success' @click='authenticate'>Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
</v-layout>
</template>

<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
