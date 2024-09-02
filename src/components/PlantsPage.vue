<template>
    <div class="background-container">
      <div class="container bg-custom-opacity">
        <h1 class="text-white">Plants</h1>
        <!-- Example of Bootstrap grid layout -->
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img src="/images/thrillers.jpeg" class="card-img-top" alt="Picture of big fern as the centerpiece in a black flowerpot with white flowers peeking through the leaves">
              <div class="card-body">
                <h5 class="card-title">Thrillers</h5>
                <p class="card-text">Thrillers are tall plants that provide a focal point. They are
                  typically placed in the center or back of the container.
                  Examples include ornamental grasses, tall flowering plants
                  like cannas, or foliage plants like ferns (shown).</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="/images/fillers.jpeg" class="card-img-top" alt="Picture of a tray of white violas at a flower market">
              <div class="card-body">
                <h5 class="card-title">Fillers</h5>
                <p class="card-text"> Fillers are medium-height plants that fill the space between
                  the thriller and the spillers. Fillers compliment the thriller
                  and the spillers, with complementary colors and textures.
                  Examples include begonias, petunias, impatiens, and violas.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="/images/spillers.jpeg" class="card-img-top" alt="Picture of creeping jenny trailing over the sides of a black flowerpot filled with white flowers and a fern centerpiece">
              <div class="card-body">
                <h5 class="card-title">Spillers</h5>
                <p class="card-text">Spillers are cascading plants that hang over the edges of the
                  container. They add a dramatic element and are usually placed
                  around the outer edges, so they can spill over the sides.
                  Examples include trailing ivy, sweet potato vine, and creeping
                  jenny (shown).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

// Image paths
const images = ref({
  fillers: '/images/thrillers.jpeg',
  thrillers: '/images/thrillers.jpeg',
  spillers: '/images/spillers.jpeg'
});
  </script>
  
  <style scoped>
  /* configures the background image */
  .background-container {
    position: relative;
    width: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)), url('../images/knot-garden.jpeg'); /* adds a white gradient overlay on the background image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;  /* prevents the background from expanding when expanding the accordion */
  }
  
  /* adds a box shadow to the cards */
  .card {
    box-shadow: 0 .5rem .5rem -.25rem rgba(0, 0, 0, 0.5);
  }
  </style>
  