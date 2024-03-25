<template>
  <div class="app">
    <TheHeader />

    <TheSearch />

    <router-view></router-view>

    <SvgManager />
  </div>
</template>

<script setup>
import TheHeader from '@/components/Base/TheHeader.vue'
import TheSearch from '@/components/Base/TheSearch.vue'
import SvgManager from '@/components/Base/SvgManager.vue'
</script>

<style lang="scss">
h1 {
  font-family: Raleway;
}
</style>
