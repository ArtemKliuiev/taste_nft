<template>
  <div class="bottom-nft">
    <h3 class="bottom-nft__title">Feature works</h3>

    <div class="bottom-nft__cards">
      <div v-for="(item, id) in nft" :key="id" class="search__one-card">
        <NftCard v-if="id < quantity" :nftInfo="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NftCard from '@/components/Reusable/NftCard.vue'
import { nft } from '@/data/nft.js'
import { computed, ref } from 'vue'

const windowWidth = ref(window.innerWidth)

const quantity = computed(() => {
  if (windowWidth.value < 1024 && windowWidth.value > 768) {
    return 9
  } else if (windowWidth.value < 768) {
    return 10
  }
  return 8
})

window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
})
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.bottom-nft {
  &__title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  &__cards {
    width: 100%;
    min-height: 462px;
    display: grid;
    column-gap: 16px;
    grid-auto-columns: 462px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 20px;

    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include media-breakpoint-down(sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media-breakpoint-down(xs) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
