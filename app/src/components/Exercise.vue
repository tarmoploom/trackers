<template>
  <div class="bg-orange-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
    <div class="text-center bg-gray-50">
      <div>{{ exercise.name }} : {{ exercise.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Exercise } from '@/model/exercise';

defineProps<{ exercise: Exercise }>();
</script>
