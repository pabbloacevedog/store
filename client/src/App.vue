<template>
    <v-app dark>
        <Menu app></Menu>
        <Contenedor>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </Contenedor>
        <Pie app></Pie>
    </v-app>
</template>

<script>
    import Menu from './components/Menu/main.vue'
    import Contenedor from './components/Contenedor/main.vue'
    import Pie from './components/Pie/main.vue'
    export default {
        name: 'app',
        components: {
            Menu,
            Contenedor,
            Pie
        }
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
