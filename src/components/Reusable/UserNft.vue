<template>
  <div class="user-nft">
    <ul class="user-nft__tabs">
      <li
        @click="tab(1)"
        class="user-nft__tab"
        :class="{ 'user-nft__tab_active': activeTab === 1 }"
      >
        Created
      </li>

      <li
        @click="tab(2)"
        class="user-nft__tab"
        :class="{ 'user-nft__tab_active': activeTab === 2 }"
      >
        Collected
      </li>

      <li
        @click="tab(3)"
        class="user-nft__tab user-nft__tab-show"
        :class="{ 'user-nft__tab_active': activeTab === 3 }"
        v-if="profile"
      >
        Bids
      </li>
    </ul>

    <div class="user-nft__cards">
      <div v-for="(item, id) in currentNft" :key="id" class="user-nft__card">
        <NftCard v-if="id < 8" :nftInfo="item" :key="key++" :profile="profile && activeTab === 1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, toRefs, watch } from 'vue'
import { nft } from '@/data/nft.js'
import { user } from '@/data/profile.js'
import NftCard from '@/components/Reusable/NftCard.vue'

const props = defineProps(['curUser', 'profile'])
const activeTab = ref(1)
const { curUser } = toRefs(props)
let key = 0

watch(curUser, () => {
  tab(1)
})

const currentNft = computed(() => {
  if (activeTab.value === 1) {
    return nft.filter((nft) => nft.user === curUser.value.id)
  } else if (activeTab.value === 2) {
    return nft.filter((nft) => nft.owner === curUser.value.id)
  }

  return nft.filter((nft) => user.bid.includes(nft.id))
})

function tab(num) {
  activeTab.value = num
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.user-nft {
  &__tabs {
    display: flex;
    margin-bottom: 21px;
  }

  &__tab {
    font-size: 18px;
    font-weight: 700;
    color: $whiteOpacity;
    margin-right: 23px;
    transition: color 300ms ease;
    cursor: pointer;
    user-select: none;

    &:hover {
      @include media-breakpoint-up(md) {
        color: $whiteOpacityFour;
      }
    }

    &_active {
      color: $white;

      &:hover {
        color: $white;
      }
    }
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
  }
}
</style>
