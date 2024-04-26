<template>
  <UIModal>
    <template #modal-name>
      <span v-if="loadingState === 1">Connecting wallet</span>
      <span v-if="loadingState === 2">Exit from wallet</span>
      <span v-if="loadingState === 3">Creating a bid</span>
    </template>

    <template #modal-main>
      <div class="loading">
        <div class="loading__circle">
          <BaseSvg id="loading" />
          <BasePicture
            :srcset="url('images/wallet-logo.webp')"
            :src="url('images/wallet-logo.png')"
            alt="logo"
          />
        </div>
        <div class="loading__title">Initializing</div>
      </div>
    </template>
  </UIModal>
</template>

<script setup>
import UIModal from '@/components/UI/UIModal.vue'
import { url } from '@/components/composable/imgUrl.js'
import BaseSvg from '@/components/Base/BaseSvg.vue'
import BasePicture from '@/components/Base/BasePicture.vue'
defineProps(['loadingState'])
</script>

<style lang="scss">
@import '@/assets/scss/base/base';
.loading {
  width: 597px;
  height: 100%;

  @include media-breakpoint-down(sm) {
    width: 70vw;
  }

  &__circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 22px auto 10px;
    background: $white;
    position: relative;

    svg {
      width: 60px;
      height: 60px;
      animation: loading 700ms infinite linear;
      transform-origin: 50% 50%;
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__title {
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    margin-bottom: 7px;
  }

  @keyframes loading {
    0% {
      transform: rotate(0) scale(1.01);
    }
    100% {
      transform: rotate(360deg) scale(1.01);
    }
  }
}
</style>
