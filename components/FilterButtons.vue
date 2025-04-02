<template>
  <div class="filter-buttons flex gap-2 overflow-x-auto py-2">
    <button 
      v-for="filter in filters" 
      :key="filter.id"
      :class="[
        'px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center gap-1',
        activeFilters.includes(filter.id) 
          ? 'bg-skyscanner-dark-blue text-white' 
          : 'bg-white border border-gray-300'
      ]"
      @click="toggleFilter(filter.id)"
    >
      <i v-if="filter.icon" :class="filter.icon"></i>
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const filters = [
  { id: 'cheapest', label: '최저가 항공편', icon: '' },
  { id: 'direct', label: '직항 항공편', icon: '' },
  { id: 'food', label: '맛집 추천', icon: '' },
  { id: 'popular', label: '지명가는 여행지', icon: 'fas fa-map-marker-alt' },
  { id: 'booking', label: '예약', icon: 'fas fa-calendar-alt' },
  { id: 'culture', label: '예술과 문화', icon: 'fas fa-palette' },
  { id: 'beach', label: '맛있는 음식', icon: 'fas fa-umbrella-beach' },
  { id: 'entertainment', label: '나이트라이프 및 엔터테인먼트', icon: 'fas fa-heart' }
];

const activeFilters = ref(['cheapest']);

const toggleFilter = (filterId: string) => {
  if (activeFilters.value.includes(filterId)) {
    activeFilters.value = activeFilters.value.filter(id => id !== filterId);
  } else {
    activeFilters.value.push(filterId);
  }
};
</script>