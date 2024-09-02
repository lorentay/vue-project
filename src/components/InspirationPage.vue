<template>
  <!-- Creates the container for the background with a full-screen
      height, centering all its content both vertically and horizontally. -->
  <div
    class="background-container d-flex flex-column justify-content-center align-items-center text-center"
    style="min-height: 100vh; background-color: #000"
  >
    <div id="gardenCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">

      <!-- Sets up interation and interates through carousel images (objects) -->

        <div
          v-for="(image, index) in images"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="image.src" class="d-block mx-auto carousel-img" :alt="image.alt">
          <div class="carousel-caption d-block text-center p-4 bg-custom-opacity rounded">
            <h5>{{ image.caption }}</h5>
            <p class="lead d-none d-md-block">{{ image.description }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#gardenCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#gardenCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Array of objects (images) for the carousel
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
</script>

<style>
/* configures the box color behind the text to provide contrast */
.bg-custom-opacity {
  background-color: rgba(0, 0, 0, 0.6);
}

/* configures the circles behind the directional arrows to provide contrast */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
}
</style>
