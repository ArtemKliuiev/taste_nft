<template>
  <div class="search">
    <div class="container">
      <div class="search__main">
        <div class="search__dropdowns">
          <UIDropDown
            :list="['Recently added', 'Popular', 'The best']"
            @submit="(e) => (sort = e)"
          />

          <UIDropDown :list="['All', 'Auctions', 'On sale']" @submit="(e) => (filter = e)" />
        </div>

        <div class="search__cards">
          <div v-for="(item, id) in currentNft" :key="id" class="search__one-card">
            <NftCard v-if="nftId > id" :nftInfo="item" :key="nftKey++" />
          </div>
          <span v-if="currentNft.length === 0" class="search__cards-empty">There are no NFTs</span>
        </div>

        <div class="search__btn">
          <UIButton @click="showMore" :state="state">Show all</UIButton>
        </div>

        <div class="search__users">
          <UsersSlider />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIDropDown from '@/components/UI/UIDropDown.vue'
import UIButton from '@/components/UI/UIButton.vue'
import NftCard from '@/components/Reusable/NftCard.vue'
import { onMounted, ref, watch } from 'vue'
import UsersSlider from '@/components/Reusable/UsersSlider.vue'
import { nft } from '@/data/nft.js'
import { useSearchStore } from '@/data/store/store.js'
import { useRouter } from 'vue-router'

const searchStore = useSearchStore()
const router = useRouter()
const sort = ref('Recently added')
const nftArray = ref([])
const filter = ref('All')
const state = ref('disabled')
const currentNft = ref([])
const nftId = ref(4)
let nftKey = 0

onMounted(() => {
  const query = router.currentRoute.value.query.query
  if (query) {
    searchStore.search = query
  }
  searchNft(searchStore.search)
})

watch(searchStore, () => {
  if (searchStore.search === '') {
    setTimeout(() => {
      searchNft(searchStore.search)
    }, 300)
  } else {
    searchNft(searchStore.search)
  }

  if (searchStore.search === '') {
    router.back()
  }
})

function updateQuery(search) {
  router.replace({
    query: { query: search }
  })
}

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
  const currentNftArray = nftArray.value

  if (filter.value === 'All') {
    sortArray = currentNftArray
  } else if (filter.value === 'Auctions') {
    sortArray = currentNftArray.filter((nft) => nft.type === 'auction')
  } else if (filter.value === 'On sale') {
    sortArray = currentNftArray.filter((nft) => nft.type === 'default')
  }
  currentNft.value = sortArray
  nftId.value = 4
})

function showMore() {
  nftId.value = nftId.value + 4
  activeBtn()
}

function activeBtn() {
  if (currentNft.value.length <= nftId.value) {
    state.value = 'disabled'
  } else {
    state.value = 'active'
  }
}

function searchNft(search) {
  updateQuery(search)

  const regEx = new RegExp(search === '' ? '(?=.*.)^$' : search, 'i')
  currentNft.value = nft.filter((nft) => regEx.test(nft.description.title))
  nftArray.value = currentNft.value
  activeBtn()
  nftId.value = 4
}
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.search {
  padding: 88px 0 0 0;
  background: $charcoal;
  animation: visible 300ms ease;

  @include media-breakpoint-down(xs) {
    padding: 65px 0 0 0;
  }

  &__dropdowns {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
  }

  &__main {
    height: 100%;
  }

  &__cards {
    position: relative;
    width: 100%;
    min-height: 462px;
    display: grid;
    column-gap: 16px;
    grid-auto-columns: 462px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 8px;

    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include media-breakpoint-down(sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media-breakpoint-down(xs) {
      grid-template-columns: repeat(1, 1fr);
    }

    &-empty {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
  }

  &__btn {
    width: 121px;
    height: 40px;
    margin: 0 auto;
  }

  &__users {
    width: 100%;
    //height: 243px;
    margin: 47px 0;
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

@keyframes flash {
  0% {
    left: -30%;
  }
  100% {
    left: 130%;
  }
}
</style>
