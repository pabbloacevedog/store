<template>
    <section>
        <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
    </section>
</template>
<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
