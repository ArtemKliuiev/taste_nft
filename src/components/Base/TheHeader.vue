<template>
  <header class="header">
    <div class="header__logo">
      <BasePicture :srcset="'logo.webp'" :src="'logo.png'" :alt="'logo'" />
    </div>

    <div class="header__search">
      <BaseSvg id="search" />

      <BaseInput :id="'header-input'" v-model="pizda" />
    </div>

    <div class="header__btn">
      <UIButton>Connect wallet</UIButton>
    </div>
  </header>
  <div class="info">{{ info }}</div>
  <TheSearch v-show="true || info != ''" />
</template>

<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue'
import UIButton from '@/components/UI/UIButton.vue'
import BasePicture from '@/components/Base/BasePicture.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import TheSearch from '@/components/Base/TheSearch.vue'
import { ref } from 'vue'

let info = ref('')
</script>

<style lang="scss">
.info {
  background: red;
  width: 140px;
  height: 140px;
  margin: 100px;
}

.header {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background: #30363d;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-radius: 0px 0px 32px 32px;

  &__logo {
    margin-left: 5px;
    img {
      width: 37.93px;
      height: 35.65px;
    }
  }

  &__search {
    position: relative;
    flex-grow: 1;
    max-width: 100%;
    margin: 0 16px 0 28px;

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
    }

    svg {
      position: absolute;
      left: 14.5px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
    }
  }

  &__btn {
    width: 126px;
    height: 32px;
  }
}
</style>
