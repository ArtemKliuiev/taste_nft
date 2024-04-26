<template>
  <div class="nft-cards">
    <div class="container">
      <div class="nft-cards__dropdowns">
        <UIDropDown :list="['Recently added', 'Popular', 'The best']" @submit="(e) => (sort = e)" />

        <UIDropDown :list="['All', 'Auctions', 'On sale']" @submit="(e) => (filter = e)" />
      </div>

      <div class="nft-cards__cards">
        <div v-for="(item, id) in currentNft" :key="id" class="search__one-card">
          <NftCard v-if="id < quantity" :nftInfo="item" :key="nftKey++" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIDropDown from '@/components/UI/UIDropDown.vue'
import NftCard from '@/components/Reusable/NftCard.vue'
import { nft } from '@/data/nft.js'
import { computed, ref, watch } from 'vue'

const currentNft = ref(nft)
let nftKey = 0
const sort = ref('Recently added')
const filter = ref('All')
const windowWidth = ref(window.innerWidth)

//Вынести в комп.
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

watch(sort, () => {
  if (sort.value === 'Recently added') {
    currentNft.value.sort((a, b) => a.sortInfo.recentlyAdded - b.sortInfo.recentlyAdded)
  } else if (sort.value === 'Popular') {
    currentNft.value.sort((a, b) => a.sortInfo.popular - b.sortInfo.popular)
  } else if (sort.value === 'The best') {
    currentNft.value.sort((a, b) => a.sortInfo.best - b.sortInfo.best)
  }
})

watch(filter, () => {
  let sortArray = []
  const currentNftArray = nft

  if (filter.value === 'All') {
    sortArray = currentNftArray
  } else if (filter.value === 'Auctions') {
    sortArray = currentNftArray.filter((nft) => nft.type === 'auction')
  } else if (filter.value === 'On sale') {
    sortArray = currentNftArray.filter((nft) => nft.type === 'default')
  }
  currentNft.value = sortArray
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.nft-cards {
  &__dropdowns {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
  }

  &__cards {
    display: grid;
    column-gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 60px;

    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include media-breakpoint-down(sm) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 50px;
    }

    @include media-breakpoint-down(xs) {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 40px;
    }
  }
}
</style>
