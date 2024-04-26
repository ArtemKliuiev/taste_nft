<template>
  <div>
    <MainSlider />
    <NftCards />
    <BottomSlider />
  </div>
</template>

<script setup>
import MainSlider from '@/components/pages/main/MainSlider.vue'
import NftCards from '@/components/pages/main/NftCards.vue'
import BottomSlider from '@/components/pages/main/BottomSlider.vue'
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.main {
  height: 200vh;
}
</style>
