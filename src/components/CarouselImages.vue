import toggleBorderMixin from '../mixins/toggleBorderMixin.js';

<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <slot name="header"></slot>

    <div class="carousel-inner">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <img
          :src="image.src"
          class="d-block w-100"
          :alt="image.alt"
          :style="borderStyle" <!-- Apply dynamic border style -->
          @click="toggleBorder" <!-- Toggle the border on click -->
        >
        <div class="carousel-caption d-block text-center p-4 bg-custom-opacity rounded">
          <h5>{{ image.caption }}</h5>
          <p class="lead d-none d-md-block">{{ image.description }}</p>
        </div>
      </div>
    </div>

    <!-- Carousel controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import toggleBorderMixin from './toggleBorderMixin.js'; // Import the mixin

// Apply the mixin
const { hasBorder, toggleBorder } = toggleBorderMixin();

// Compute the border style based on the state
const borderStyle = computed(() => ({
  border: hasBorder.value ? '5px solid red' : 'none',
}));

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
</script>

<style scoped>

/* arrow icon styles for contrast */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
}
</style>
