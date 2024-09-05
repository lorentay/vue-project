<template>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="image.src" class="d-block w-100" :alt="image.alt">
          <div class="carousel-caption d-block text-center p-4 bg-custom-opacity rounded">
            <h5>{{ image.caption }}</h5>
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
  // defines props for image attributes with simple prop validation
  const props = defineProps({
    images: {
      type: Array, // Validate that images is an array
      required: true, // This prop must be passed
    },
  });
  </script>
  
  <style scoped>
  /* background box behind the caption for contrast */
  .bg-custom-opacity {
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  /* arrow icon styles for contrast */
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 3.125rem;
    height: 3.125rem;
  }
  </style>
  