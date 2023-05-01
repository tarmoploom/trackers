<template>
  <nav class="bg-orange-400">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                to="/"
                class="text-orange-200 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                active-class="bg-orange-500 text-white"
                aria-current="page"
                >Harjutused</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup lang="ts"></script>
