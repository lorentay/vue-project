<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <!-- added a slot for the header -->
    <slot name="header"></slot>

    <div class="carousel-inner">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <!-- applies a border on click/toggle -->
        <img
          :src="image.src"
          class="d-block w-100"
          :alt="image.alt"
          :style="{ border: hasBorder[index] ? '5px solid green' : 'none' }"
          @click="toggleBorder(index)"
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

// Props for images
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

// defines an array that tracks the border state for each image
const hasBorder = ref(new Array(props.images.length).fill(false));

// Toggles the border for each image
function toggleBorder(index) {
  console.log(`Image clicked at index: ${index}`); 
  hasBorder.value[index] = !hasBorder.value[index];
  console.log(`Border state for image ${index}:`, hasBorder.value[index]); 
}
</script>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
}
</style>
