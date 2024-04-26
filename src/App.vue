<template>
  <div class="app">
    <TheHeader />

    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'preloader'">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <UIToast />
    <SvgManager />
  </div>
</template>

<script setup>
import TheHeader from '@/components/Base/TheHeader.vue'
import SvgManager from '@/components/Base/SvgManager.vue'
import UIToast from '@/components/UI/UIToast.vue'
</script>

<style lang="scss">
.preloader-enter-active {
  transition: opacity 300ms ease;
}
.preloader-leave-active {
  transition: opacity 300ms ease;
}

.preloader-enter-from,
.preloader-leave-to {
  opacity: 0;
}

.search-leave-active {
  transition: opacity 150ms ease;
}

.search-leave-to {
  opacity: 0;
}
</style>
