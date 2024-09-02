<template>
  <div class="background-container">
    <div class="container my-5 flex-grow-1 overflow-auto">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="accordion" id="recipeAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <img
                    :src="images.mojito"
                    class="img-fluid me-3"
                    alt="A silver tray holds multiple glasses of mojitos with a lime circle on the rim and mint"
                    style="max-width: 300px"
                  >
                  Mojito Cocktail Recipe
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#recipeAccordion"
              >
                <div class="accordion-body text-start">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">2 ounces white rum</li>
                    <li class="list-group-item">1/2 ounce simple syrup</li>
                    <li class="list-group-item">3/4 ounce lime juice</li>
                    <li class="list-group-item">3-4 mint leaves</li>
                    <li class="list-group-item">Club soda</li>
                  </ul>
                  <p class="ms-3">
                    <strong>Method</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Placeat, adipisci
                    asperiores!
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <img
                    :src="images.vodkaGingerLime"
                    class="img-fluid me-3"
                    alt="Two tall lime-etched glasses, with mint filling the top and wedges of lime sitting on a wicker tray at the bottom"
                    style="max-width: 300px"
                  >
                  Vodka & Ginger Lime Cocktail
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#recipeAccordion"
              >
                <div class="accordion-body text-start">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">2 ounces vodka</li>
                    <li class="list-group-item">1 ounce ginger liqueur</li>
                    <li class="list-group-item">1 ounce lime juice</li>
                    <li class="list-group-item">Sparkling water</li>
                    <li class="list-group-item">
                      Lime wheel & fresh mint for garnish
                    </li>
                  </ul>
                  <p class="ms-3">
                    <strong>Method</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Placeat, adipisci
                    asperiores!
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <img
                    :src="images.prosecco"
                    class="img-fluid me-3"
                    alt="A glass of rosé prosecco in a champagne flute sit on a glass table with a white Maltese dog looking at it"
                    style="max-width: 300px"
                  >
                  Not Just Prosecco
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#recipeAccordion"
              >
                <div class="accordion-body text-start">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">1 champagne flute</li>
                    <li class="list-group-item">
                      5 ounces prosecco, rosé or blanco
                    </li>
                    <li class="list-group-item">White dog, optional</li>
                  </ul>
                  <p class="ms-3">
                    <strong>Method</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Placeat, adipisci
                    asperiores!
                  </p>
                </div>
              </div>
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
  mojito: '/images/mojito.jpeg',
  vodkaGingerLime: '/images/vodka-ginger-lime.jpeg',
  prosecco: '/images/not-just-prosecco.jpeg'
});
</script>

<style scoped>
.background-container {
  position: relative;
  width: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)), url('/images/knot-garden.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
