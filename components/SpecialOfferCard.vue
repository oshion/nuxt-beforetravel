<template>
  <div class="card bg-skyscanner-dark-blue text-white rounded-lg overflow-hidden shadow-md">
    <div class="p-4">
      <h2 class="text-lg font-bold mb-2">{{ offer.title }}</h2>
      <p class="text-sm mb-2">{{ offer.description }}</p>
      <p class="text-lg font-bold">{{ offer.discount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type  { SpecialOffer } from '~/types/travel';

defineProps<{
  offer: SpecialOffer
}>();
</script>