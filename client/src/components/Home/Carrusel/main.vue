<template>
	<section class="espacio_toolbar">
		<v-carousel hide-delimiters class="alto-carrusel">
			<v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i" hide-delimiters></v-carousel-item>
		</v-carousel>
	</section>
</template>
<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
