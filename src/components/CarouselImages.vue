<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <!-- adds a slot for the header allowing dynamic content to be passed into the carousel's eader -->
    <slot name="header"></slot>

    <div class="carousel-inner">
      <!-- loops through the images array and renders each image -->
      <div
        v-for="(image, index) in images" 
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
       <!-- displays the image with a dynamic border that toggles when clicked -->       
       <img
          :src="image.src"
          class="d-block w-100"
          :alt="image.alt"
          :style="{ border: hasBorder[index] ? '5px solid green' : 'none' }"
          @click="toggleBorder(index)"
        >
        <!-- displays the image caption and description -->
        <div class="carousel-caption d-block text-center p-4 bg-custom-opacity rounded">
          <h5>{{ image.caption }}</h5>
          <p class="lead d-none d-md-block">{{ image.description }}</p>
        </div>
      </div>
    </div>

    <!-- carousel controls -->
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

// props for images (array of image objects passed from the parent)
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

// defines an array that tracks the border state for each image
const hasBorder = ref(new Array(props.images.length).fill(false));

// toggles the border for each image
function toggleBorder(index) {
  hasBorder.value[index] = !hasBorder.value[index];
}
</script>

<style scoped>
/* adds a background color to the arrows to provide contrast for readability */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
}
/* adds a background color to the text to provide contrast for readability */
.bg-custom-opacity {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
