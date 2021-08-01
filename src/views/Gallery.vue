<template>
  <div class="galeria">
    <h1 class="heading-2 pl-8">Galeria de Fotos:</h1>
    <v-container>
      <v-carousel
        cycle
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="i in 5" :key="i">
          <v-img
            :src="require('../assets/galeria/' + i + '.jpg')"
            contain
            width="100%"
          />
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "galeria",
};
</script>