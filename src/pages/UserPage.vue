<template>
  <div class="user-page">
    <div class="container">
      <TopUser :curUser="users[$route.params.id]" user="true" />
      <MainUser :curUser="users[$route.params.id]" />
      <UserNft :curUser="users[$route.params.id]" />
    </div>
  </div>
</template>

<script setup>
import TopUser from '@/components/Reusable/TopUser.vue'
import { users } from '@/data/user.js'
import MainUser from '@/components/Reusable/MainUser.vue'
import UserNft from '@/components/Reusable/UserNft.vue'
</script>

<style lang="scss" scoped>
.user-page {
  overflow: hidden;
}
</style>
