<template>
  <div class="auction">
    <div class="container">
      <AuctionBanner
        :image="nft[$route.params.id].photo"
        :type="nft[$route.params.id].type"
        :price="nft[$route.params.id].price"
      />
    </div>
  </div>
</template>

<script setup>
import { nft } from '@/data/nft.js'
import AuctionBanner from '@/components/pages/auction/AuctionBanner.vue'
</script>

<style lang="scss" scoped>
.auction {
  margin-top: 95px;
  margin-bottom: 50px;
}
</style>
