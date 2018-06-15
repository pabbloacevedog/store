<template>
	<div>
		<v-navigation-drawer
		clipped
		v-model="drawer"
		app
		>
		<v-list dense>
			<v-list-tile >
				<v-list-tile-action>
					<v-icon>dashboard</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Dashboard</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile >
				<v-list-tile-action>
					<v-icon>settings</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Settings</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
	<v-toolbar app fixed clipped-left>
		<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
		<v-toolbar-title>
			<v-flex xs12 sm3 md3 left class="logo-toolbar">
				<img :src="logo_toolbar" class="alto-logo">
			</v-flex>
		</v-toolbar-title>
		<v-spacer></v-spacer>
        <v-flex xs12 sm3 md3 class="separarBusqueda">
            <v-text-field
            clearable
            rows="1"
            flat
            solo-inverted
            prepend-icon="search"
            label="¿Qué buscas?"
            v-model="buscando"
            class="buscador"
            ></v-text-field>
        </v-flex>
        <v-toolbar-items class="hidden-sm-and-down">
        	<div v-if='!user' class='paddingOut'>
        		<v-btn flat v-for='link in navItems' :key='link.title' :to='link.path' >
        			<v-icon left>{{link.icon}}</v-icon>
        			{{link.title}}
        		</v-btn>
        	</div>
        	<div  v-else class='paddingOut'>
        		<v-btn flat class="inline" >
        			<v-badge color="red" overlap>
        				<span slot="badge">{{total_productos}}</span>
        				<v-icon>shopping_cart</v-icon>
        			</v-badge>
        		</v-btn>
        		<v-btn flat to='/profile'>
        			<v-avatar size="36px" left>
        				<img
        				v-if="getUser.usuario"
        				:src="getUser.foto_perfil"
        				alt=""
        				>
        				<v-icon v-else>{{ iconBlanco }}</v-icon>
        			</v-avatar>
        			<div style="padding: 10px;">
        				<strong>{{getUser.usuario}}</strong>
        			</div>

        		</v-btn>
        		<v-btn flat @click='logout' class="logout">
        			<v-icon left>highlight_off</v-icon>
        			Salir
        		</v-btn>
        	</div>
        </v-toolbar-items>
	</v-toolbar>
</div>
</template>

<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
