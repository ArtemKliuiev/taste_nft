<template>
  <header class="header">
    <div class="header__logo">
      <BasePicture
        :srcset="'/taste_nft/src/assets/images/logo.webp'"
        :src="'/taste_nft/src/assets/images/logo.png'"
        :alt="'logo'"
      />
    </div>

    <div class="header__search">
      <BaseSvg id="search" />

      <BaseInput :id="'header-input'" v-model="search" :placeholder="'Search for ...'" />
    </div>

    <div class="header__btn">
      <UIButton>Connect wallet</UIButton>
    </div>
  </header>
  <div class="info">{{ search }}</div>
  <TheSearch v-show="search" :search="search" />
</template>

<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue'
import UIButton from '@/components/UI/UIButton.vue'
import BasePicture from '@/components/Base/BasePicture.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import TheSearch from '@/components/Base/TheSearch.vue'
import { ref } from 'vue'

// const emit = defineEmits(['submit'])
// console.log(emit)

const search = ref('')
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.info {
  background: red;
  width: 140px;
  height: 140px;
  margin: 100px;
  display: none;
}

.header {
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: #30363d;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-radius: 0 0 32px 32px;

  @include media-breakpoint-down(xs) {
    padding: 0 15px;
    height: 50px;
  }

  &__logo {
    margin-left: 5px;
    height: 36px;
    aspect-ratio: 1.1/1;

    @include media-breakpoint-down(xs) {
      height: 25px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__search {
    position: relative;
    flex-grow: 1;
    max-width: 100%;
    margin: 0 16px 0 28px;

    @include media-breakpoint-down(xs) {
      margin: 0 10px 0 10px;
    }

    input {
      width: 100%;
      height: 32px;
      padding: 0 0 0 41px;
      background: #1d2228;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.5);
      font-size: 12px;

      &:focus {
        outline: none;
      }

      @include media-breakpoint-down(xs) {
        padding: 0 0 0 30px;
      }
    }

    svg {
      position: absolute;
      left: 14.5px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;

      @include media-breakpoint-down(xs) {
        left: 5px;
      }
    }
  }

  &__btn {
    width: 126px;
    height: 32px;
  }
}
</style>
