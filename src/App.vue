<template>
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

    <!-- This is where the routed component will be displayed -->
    <router-view />

    <footer class="footer bg-dark text-white text-center py-3">
      <div class="container-fluid">
        <p class="mb-0">&copy; 2024 Gardens & Sips All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No need to import specific components here, Vue Router will handle it.
</script>

<style>
/* Add your styles here */
</style>
