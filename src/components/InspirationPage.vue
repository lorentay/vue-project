<template>
  <div class="inspiration-background">
    <!-- The header content will now be passed via a slot to the CarouselImages component -->
    <CarouselImages :images="images">
      <template v-slot:header>
        <h2 class="page-header">Inspiration</h2>
      </template>
    </CarouselImages>
  </div>
</template>

<script setup>
import CarouselImages from './CarouselImages.vue';
import { ref } from 'vue';

// Images array for the carousel
const images = ref([
  {
    src: '/images/plant-a-pot.jpeg',
    alt: 'A flowerpot with purple petunias, white mandevilla, and creeping jenny',
    caption: 'Plant a Pot',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam animi quaerat sunt aliquam sit.',
  },
  {
    src: '/images/dress-the-table.jpeg',
    alt: 'White begonias and purple petunias in terra cotta pots with a small vase of fuchsia roses',
    caption: 'Dress the Table',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    src: '/images/light-it-up.jpeg',
    alt: 'A garden with strings of white lights',
    caption: 'Light It Up',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut architecto tempora cupiditate.',
  },
]);
console.log(images.value);
</script>

<style scoped>
.page-header {
  text-align: center;
  font-size: 24px;
  color: white;
  padding-top: 10px;
  margin-bottom: 10px;
}
.inspiration-background {
  background-color: #000; 
  min-height: 100vh; 
}
</style>
