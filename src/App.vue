<template>
  <div class="app">
    <TheHeader />

    <router-view></router-view>

    <SvgManager />
  </div>
</template>

<script setup>
import TheHeader from '@/components/Base/TheHeader.vue'

import SvgManager from '@/components/Base/SvgManager.vue'
</script>

<style lang="scss"></style>
