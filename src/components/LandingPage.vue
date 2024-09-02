<template>
  <div>
    <div
      class="background-container d-flex flex-column justify-content-center align-items-center text-center"
      style="min-height: 100vh"
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
import { onMounted } from 'vue';
import bootstrap from 'bootstrap'; // imports bootstrap on this page to resolve a problem

// initializes tooltips
onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
</script>

<style scoped>
/* configures the box color behind the text to provide contrast to make the text readable */
.bg-custom-opacity {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
