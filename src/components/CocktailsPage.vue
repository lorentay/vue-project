<template>
  <!-- Creates the container for the background with a full-screen
      height, centering all its content both vertically and horizontally. -->
  <div class="background-container d-flex flex-column justify-content-center align-items-center text-center">
    <div class="container my-5 flex-grow-1 overflow-auto">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="accordion" id="recipeAccordion">

             <!-- Sets up interation and interates through recipes (objects) -->
            <div
              class="accordion-item"
              v-for="(recipe, index) in recipes"
              :key="index"
            >
              <h2 class="accordion-header" :id="'heading' + index">
                <button
                  class="accordion-button"
                  type="button"
                  :data-bs-target="'#collapse' + index"
                  data-bs-toggle="collapse"
                  :aria-expanded="index === 0 ? 'true' : 'false'"
                  :aria-controls="'collapse' + index"
                >
                  <img
                    :src="recipe.image"
                    class="img-fluid me-3"
                    :alt="recipe.alt"
                    style="max-width: 300px"
                  >
                  {{ recipe.name }}
                </button>
              </h2>
              <div
                :id="'collapse' + index"
                class="accordion-collapse collapse"
                :class="{ show: index === 0 }"
                :aria-labelledby="'heading' + index"
                data-bs-parent="#recipeAccordion"
              >
                <div class="accordion-body text-start">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="(ingredient, i) in recipe.ingredients"
                      :key="i"
                    >
                      {{ ingredient }}
                    </li>
                  </ul>

                  <!-- v-if v-else statement adds a note to the Mojito cocktail -->
                  <div v-if="recipe.name === 'Mojito Cocktail Recipe'">
                    <p class="ms-3 text-success">
                      <strong>Note:</strong> A Mojito cocktail is traditionally served in a tall "collins" glass.
                    </p>
                  </div>

                  <!-- ensures that the 'method' text appears with the special note in the v-if v-else statement -->
                  <p class="ms-3">
                    <strong>Method:</strong> {{ recipe.method }}
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

// objects containing the cocktail recipes
const recipes = ref([
  {
    name: 'Mojito Cocktail Recipe',
    image: '/images/mojito.jpeg',
    alt: 'A silver tray holds multiple glasses of mojitos with a lime circle on the rim and mint',
    ingredients: [
      '2 ounces white rum',
      '1/2 ounce simple syrup',
      '3/4 ounce lime juice',
      '3-4 mint leaves',
      'Club soda',
    ],
    method: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, adipisci asperiores!',
  },
  {
    name: 'Vodka & Ginger Lime Cocktail',
    image: '/images/vodka-ginger-lime.jpeg',
    alt: 'Two tall lime-etched glasses, with mint filling the top and wedges of lime sitting on a wicker tray at the bottom',
    ingredients: [
      '2 ounces vodka',
      '1 ounce ginger liqueur',
      '1 ounce lime juice',
      'Sparkling water',
      'Lime wheel & fresh mint for garnish',
    ],
    method: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, adipisci asperiores!',
  },
  {
    name: 'Not Just Prosecco',
    image: '/images/not-just-prosecco.jpeg',
    alt: 'A glass of rosé prosecco in a champagne flute sit on a glass table with a white Maltese dog looking at it',
    ingredients: [
      '1 champagne flute',
      '5 ounces prosecco, rosé or blanco',
      'White dog, optional',
    ],
    method: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, adipisci asperiores!',
  },
]);
</script>
