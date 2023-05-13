<template>
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <button id="title">TRACKERS</button>
      <div
        class="absolute inset-y-4 right-4 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ml-3 relative"
      >
      </div>
    </div>
  </div><router-view />
</template>

<script setup lang="ts"></script>

<style>
h4 {
  font-size: 540px;
}
#title {
  margin-left: 28.5%;
  overflow: hidden;
  color: rgba(76, 122, 159, 0.97);
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.525);
  font-size: 1.8em;
  font-weight: 800;
  letter-spacing: 0.5pt;
}
.button {
  padding: 8px;
}
</style>
