<template>
  <div class="search">
    <div class="container">
      <div class="search__main">
        <div class="search__dropdowns">
          <UIDropDown
            :list="['Recently added', 'Popular', 'The best']"
            @submit="(e) => (sort = e)"
            id="'drop-one'"
          />

          <UIDropDown
            :list="['All', 'Auctions', 'On sale']"
            @submit="(e) => (filter = e)"
            id="'drop-two'"
          />
        </div>

        <div class="search__cards">
          <div v-for="(item, id) in currentNft" :key="id" class="search__one-card">
            <NftCard :nftInfo="item" />
          </div>
        </div>

        <div class="search__users">
          <!--          <UsersSlider />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIDropDown from '@/components/UI/UIDropDown.vue'
import NftCard from '@/components/Reusable/NftCard.vue'
import { ref, toRefs, computed } from 'vue'
// import UsersSlider from '@/components/Reusable/UsersSlider.vue'
import { nft } from '@/data/nft.js'
const sort = ref('Recently added')
const filter = ref('All')
const props = defineProps(['search'])
const { search } = toRefs(props)

const searchRegEx = computed(
  () => new RegExp(search.value === '' ? '(?=.*.)^$' : search.value, 'i')
)

const currentNft = computed(() => {
  const searchArray = nft.filter((nft) => searchRegEx.value.test(nft.description.title))
  let sortArray = []

  if (filter.value === 'All') {
    sortArray = searchArray
  } else if (filter.value === 'Auctions') {
    sortArray = searchArray.filter((nft) => nft.type === 'auction')
  } else if (filter.value === 'On sale') {
    sortArray = searchArray.filter((nft) => nft.type === 'default')
  }

  if (sort.value === 'Recently added') {
    sortArray.sort((a, b) => a.sortInfo.recentlyAdded - b.sortInfo.recentlyAdded)
  } else if (sort.value === 'Popular') {
    sortArray.sort((a, b) => a.sortInfo.popular - b.sortInfo.popular)
  } else if (sort.value === 'The best') {
    sortArray.sort((a, b) => a.sortInfo.best - b.sortInfo.best)
  }

  return sortArray
})
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.search {
  padding: 88px 0 0 0;
  background: #1d2228;
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 100%;
  animation: visible 300ms ease;

  @include media-breakpoint-down(xs) {
    padding: 65px 0 0 0;
  }

  &__dropdowns {
    display: flex;
    gap: 12px;
  }

  &__main {
    height: 100%;
    display: grid;
    grid-template: auto 1fr auto / 1fr;
  }

  &__cards {
    width: 100%;
    height: 100%;
    //background-color: rgba(135, 67, 255, 0.53);
    padding-bottom: 48px;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);

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

  &__one-card {
  }

  &__users {
    width: 100%;
    height: 243px;
    margin: 50px 0;
    background: burlywood;
  }
}

@keyframes visible {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
