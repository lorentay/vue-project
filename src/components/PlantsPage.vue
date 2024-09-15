<template>
  <!-- creates the container for the background with a full-screen
       height, centering all its content both vertically and horizontally. -->
     <div class="background-container d-flex flex-column justify-content-center align-items-center text-center">
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
                   Thrillers are tall plants that provide a focal point. Examples include ornamental grasses and tall flowering plants.
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
                   Fillers are medium-height plants that complement the thriller and spillers. Examples include begonias, petunias, and impatiens.
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
                   Spillers are cascading plants that hang over the edges of the container. Examples include trailing ivy, sweet potato vine, and creeping jenny.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
 </template>
 
 <script setup>
 // No changes needed in the script section for this step.
 </script>
 
 <style scoped>
 .card {
   box-shadow: 0 0.5rem 0.5rem -0.25rem rgba(0, 0, 0, 0.5);
 }
 
 .background-container {
   padding: 2rem;
   background-color: #f9f9f9;
   min-height: 100vh;
 }
 
 </style>
 