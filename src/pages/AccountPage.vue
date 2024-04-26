<template>
  <div class="user-page">
    <div class="container">
      <TopUser :curUser="user" :profile="true" />
      <MainUser :curUser="user" />
      <UserNft :curUser="user" :profile="true" />
    </div>
  </div>
</template>

<script setup>
import TopUser from '@/components/Reusable/TopUser.vue'
import { user } from '@/data/profile.js'
import MainUser from '@/components/Reusable/MainUser.vue'
import UserNft from '@/components/Reusable/UserNft.vue'
</script>

<style lang="scss" scoped>
.user-page {
  overflow: hidden;
}
</style>
