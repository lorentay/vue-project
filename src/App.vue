<template>
  <!-- Controls the collapsible part of the navbar, which will be hidden or shown based on screen size. -->
  <div>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Gardens & Sips</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- provides the links for the router -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/inspiration" class="nav-link text-white">Inspiration</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cocktails" class="nav-link text-white">Cocktails</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/plants" class="nav-link text-white">Plants</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- This is where the routed content will appear -->
    <router-view />

    <footer class="footer bg-dark text-white text-center py-3">
      <div class="container-fluid">
        <p class="mb-0">&copy; 2024 Gardens & Sips All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// script for routing is located in index.js
</script>

<style>
.background-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)),
    url('../images/knot-garden.jpeg'); /* adds a white gradient overlay on the background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* prevents the background from expanding when expanding the accordion */
}

.bg-custom-opacity {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
