<template>
  <div class="inspiration-background">
    <!-- header content that is passed using a slot to the CarouselImages.vue component -->
    <CarouselImages :images="images">
      <!-- provides actual content for the header in the carousel -->
      <template v-slot:header>
        <h2 class="page-header">Inspiration</h2>
      </template>
    </CarouselImages>
  </div>
</template>

<script setup>
// imports the CarouselImages component and Vue's ref function to manage reactivity
import CarouselImages from './CarouselImages.vue';
import { ref } from 'vue';

// array of images for the carousel that will display in the carousel component
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

// logs the image array to the console for debugging purposes
console.log(images.value);

</script>

<style scoped>
/* styles fo the header inside the carousel */
.page-header {
  text-align: center;
  font-size: 24px;
  color: white;
  padding-top: 10px;
  margin-bottom: 10px;
}

/* sets the background color and ensure full height */
.inspiration-background {
  background-color: #000; 
  min-height: 100vh; 
}
</style>
