<template>
  <div>
    <Header />
    <!-- <TabMenu /> -->
    <SearchBar />
    
    <div class="container mx-auto px-5 pt-8 pb-10">
      <h1 class="text-2xl font-bold mb-4">어디로 떠나실 예정이신가요?</h1>
      
      <!-- <FilterButtons /> -->
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <!-- 특별 프로모션 카드 -->
        <!-- <SpecialOfferCard v-if="data && data.specialOffer" :offer="data.specialOffer" /> -->
        
        <!-- 목적지 카드들 -->
        <DestinationCard 
          v-for="destination in data?.destinations" 
          :key="destination.id" 
          :destination="destination" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 서버에서 데이터 가져오기
const { data } = await useFetch('/api/destinations');
</script>