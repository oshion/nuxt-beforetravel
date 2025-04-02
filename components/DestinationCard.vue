<template>
  <div class="card bg-white rounded-lg overflow-hidden shadow-md">
    <div class="card-image h-40 overflow-hidden">
      <img :src="destination.image" :alt="destination.cityName" class="w-full h-full object-cover">
    </div>
    <div class="card-content p-4">
      <h2 class="text-lg font-bold mb-2">{{ destination.cityName }}</h2>
      <h2 class="text-md mb-2">{{ destination.contryName }}</h2>
      <div class="flex justify-between text-sm text-gray-600 mb-1">
        <span>컨텐츠</span>
        <span class="text-skyscanner-blue font-bold">{{ formatPrice(destination.contentCnt) }} 개</span>
      </div>
      <!-- <div class="flex justify-between text-sm text-gray-600">
        <span>호텔 · {{ destination.hotel.stars }}성급</span>
        <span class="text-skyscanner-blue font-bold">₩{{ formatPrice(destination.hotel.price) }}</span>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Destination } from '~/types/travel';

defineProps<{
  destination: Destination
}>();

// 가격을 포맷팅하는 함수
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
</script>