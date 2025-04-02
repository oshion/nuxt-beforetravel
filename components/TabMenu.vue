<template>
  <div class="bg-skyscanner-blue text-white py-4 px-5">
    <div class="flex gap-2">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="[
          'px-4 py-2 rounded-full flex items-center gap-2',
          activeTab === tab.id ? 'bg-skyscanner-dark-blue' : 'bg-transparent border border-white'
        ]"
        @click="activeTab = tab.id"
      >
        <i :class="tab.icon"></i>
        {{ tab.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tabs = [
  { id: 'flight', label: '항공편', icon: 'fas fa-plane' },
  { id: 'hotel', label: '호텔', icon: 'fas fa-hotel' },
  { id: 'car', label: '렌터카', icon: 'fas fa-car' }
];

const activeTab = ref('flight');
</script>