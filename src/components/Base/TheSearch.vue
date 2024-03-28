<template>
  <div class="search">
    <div class="search__container">
      <DropDown
        :list="['Recently added', 'Popular', 'The best']"
        :id="'drop-one'"
        @submit="getInfo"
      />
    </div>
  </div>
</template>

<script setup>
import DropDown from '@/components/Reusable/DropDown.vue'

function getInfo(e) {
  console.log(e)
}
</script>

<style lang="scss">
.search {
  padding: 88px 0 0 0;
  background: #1d2228;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  animation: visible 300ms ease;
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
