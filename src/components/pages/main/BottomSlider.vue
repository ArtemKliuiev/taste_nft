<template>
  <div class="bottom-slider">
    <div class="container">
      <h3 class="bottom-slider__title">Featured creators</h3>
      <UsersSlider />
    </div>
  </div>
</template>

<script setup>
import UsersSlider from '@/components/Reusable/UsersSlider.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.bottom-slider {
  margin-bottom: 66px;

  @include media-breakpoint-down(sm) {
    margin-bottom: 30px;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 17px;

    @include media-breakpoint-down(xs) {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
}
</style>
