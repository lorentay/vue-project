<template>
  <!-- Creates the container for the background with a full-screen
      height, centering all its content both vertically and horizontally. -->
  <div
    class="background-container d-flex flex-column justify-content-center align-items-center text-center"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img
              src="/images/thrillers.jpeg"
              class="card-img-top"
              alt="Picture of big fern as the centerpiece in a black flowerpot with white flowers peeking through the leaves"
            />
            <div class="card-body">
              <h5 class="card-title">Thrillers</h5>
              <p class="card-text">
                Thrillers are tall plants that provide a focal point. They are typically placed in
                the center or back of the container. Examples include ornamental grasses, tall
                flowering plants like cannas, or foliage plants like ferns (shown).
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img
              src="/images/fillers.jpeg"
              class="card-img-top"
              alt="Picture of a tray of white violas at a flower market"
            />
            <div class="card-body">
              <h5 class="card-title">Fillers</h5>
              <p class="card-text">
                Fillers are medium-height plants that fill the space between the thriller and the
                spillers. Fillers compliment the thriller and the spillers, with complementary
                colors and textures. Examples include begonias, petunias, impatiens, and violas.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img
              src="/images/spillers.jpeg"
              class="card-img-top"
              alt="Picture of creeping jenny trailing over the sides of a black flowerpot filled with white flowers and a fern centerpiece"
            />
            <div class="card-body">
              <h5 class="card-title">Spillers</h5>
              <p class="card-text">
                Spillers are cascading plants that hang over the edges of the container. They add a
                dramatic element and are usually placed around the outer edges, so they can spill
                over the sides. Examples include trailing ivy, sweet potato vine, and creeping jenny
                (shown).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* adds a box shadow to the cards */
.card {
  box-shadow: 0 0.5rem 0.5rem -0.25rem rgba(0, 0, 0, 0.5);
}
</style>
