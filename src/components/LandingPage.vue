import 'bootstrap';

<template>
  <div>
    <!-- creates the container for the background with a full-screen height, 
     centering all its content both vertically and horizontally. -->
    <div
      class="background-container d-flex flex-column justify-content-center align-items-center text-center"
    >
      <div class="text-container p-4 bg-custom-opacity text-white rounded mt-5 mt-md-3">
        <h1 class="display-6 text-center text-white">Gardens & Sips</h1>
        <p class="lead text-white">
          Where the beauty of the garden pairs perfectly with cocktails, friends, and fun.
        </p>
      </div>
      <a
        href="#/inspiration"
        class="btn btn-success text-light mt-4 custom-btn"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Click for inspiring garden ideas"
        >Get Inspired</a
      >
    </div>
  </div>
</template>

<script setup>
// ensures that the DOM is loaded before tooltips initialize
import { onMounted } from 'vue'

// imports tooltips directly
import Tooltip from 'bootstrap/js/dist/tooltip'

// initializes tooltips
onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new Tooltip(tooltipTriggerEl) // Directly use Tooltip
  })
})
</script>

<style scoped>
/* adds a background color to the text to provide contrast for readability */
.bg-custom-opacity {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
