<template>
  <div class="search-container px-5 relative z-10">
    <div class="bg-white p-3 rounded-lg shadow-md -mt-6">
      <div class="flex items-center p-1 border border-gray-300 rounded-lg">
        <input 
          type="text" 
          v-model="searchText" 
          placeholder="원하시는 나라, 도시, 컨텐츠를 입력하세요." 
          class="flex-grow outline-none text-gray-700"
        />
        <button 
          @click="handleSearch" 
          class="bg-skyscanner-blue text-white p-2 rounded-lg ml-2 hover:bg-skyscanner-dark-blue transition-colors"
        >
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchText = ref('');

const handleSearch = () => {
  console.log('검색어:', searchText.value);
  // 여기에 검색 로직을 구현하세요
  // 예: 검색 API 호출 또는 라우팅 등
};
</script>