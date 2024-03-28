<template>
  <div class="auction">
    <div class="container">
      <AuctionBanner
        :image="nft[$route.params.id].photo"
        :type="nft[$route.params.id].type"
        :price="nft[$route.params.id].price"
      />

      <AuctionContent :user="users[nft[$route.params.id].user]" :nft="nft[$route.params.id]" />
    </div>
  </div>
</template>

<script setup>
import { nft } from '@/data/nft.js'
import { users } from '@/data/user.js'
import AuctionBanner from '@/components/pages/auction/AuctionBanner.vue'
import AuctionContent from '@/components/pages/auction/AuctionContent.vue'
</script>

<style lang="scss" scoped>
.auction {
  margin-top: 95px;
  margin-bottom: 50px;
}
</style>
