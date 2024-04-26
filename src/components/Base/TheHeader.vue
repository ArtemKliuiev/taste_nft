<template>
  <header class="header" :class="{ 'header_sign-in': signIn }">
    <div @click="search = ''" class="header__logo">
      <router-link to="/">
        <BasePicture
          :srcset="url('images/logo.webp')"
          :src="url('images/logo.png')"
          :width="39"
          :height="36"
          alt="logo"
        />
      </router-link>
    </div>

    <div class="header__search">
      <BaseSvg id="search" />

      <BaseInput :id="'header-input'" v-model="search" :placeholder="'Search for ...'" />
      <button @click="search = ''" v-if="search !== ''">Clear</button>
    </div>

    <div class="header__btn" :class="{ 'header__btn_sign-in': signIn }">
      <UIButton v-if="!signIn" @click="modal = true">Connect wallet</UIButton>
      <UIButton v-else>+ Add artwork</UIButton>
    </div>

    <div v-if="signIn" class="header__user">
      <HeaderUser @exit="exitAccount" />
    </div>
  </header>
  <Transition>
    <WalletModal
      block="true"
      v-if="modal"
      @closeModal="modal = false"
      @walletBtn="walletBtn"
      @videoBtn="toggleVideo"
    />
  </Transition>

  <Transition>
    <UILoadingModal
      block="true"
      v-if="loading"
      @closeModal="loading = false"
      :loadingState="loadingState"
    />
  </Transition>

  <Transition>
    <UIVideoFrame v-if="video" @closeModal="toggleVideo" />
  </Transition>
</template>

<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue'
import UIButton from '@/components/UI/UIButton.vue'
import BasePicture from '@/components/Base/BasePicture.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import HeaderUser from '@/components/Reusable/HeaderUser.vue'
import WalletModal from '@/components/UI/modal/UIWalletModal.vue'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { useSearchStore } from '@/data/store/store.js'
import UIVideoFrame from '@/components/UI/modal/UIVideoFrame.vue'
import { url } from '@/components/composable/imgUrl.js'
import UILoadingModal from '@/components/UI/modal/UILoadingModal.vue'

const searchStore = useSearchStore()
const modal = ref(false)
const signIn = ref(false)
const video = ref(false)
const loading = ref(false)
const loadingState = ref(1)
const search = ref('')
const router = useRouter()

function toggleVideo() {
  modal.value = !modal.value
  video.value = !video.value
}

function walletBtn() {
  modal.value = false
  loading.value = true

  setTimeout(() => {
    loading.value = false
    signIn.value = true
    loadingState.value = 2
  }, 2000)
}

function exitAccount() {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    signIn.value = false
    loadingState.value = 1
  }, 2000)
}

watch(searchStore, () => {
  search.value = searchStore.search
})

watch(search, () => {
  searchStore.search = search.value

  if (search.value !== '') {
    router.push('/search')
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.header {
  position: fixed;
  z-index: 50;
  top: 0;
  width: 100%;
  background: $midnight;
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
    cursor: pointer;

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
      background: $charcoal;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      color: $whiteOpacity;
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
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;

      @include media-breakpoint-down(xs) {
        left: 5px;
      }
    }

    button {
      color: $white;
      background: unset;
      border: none;
      font-size: 13px;
      font-weight: 600;
      position: absolute;
      right: 11px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      opacity: 0.5;
      display: block;
      padding: 3px 10px 3px 15px;
      transition: opacity 300ms ease 0s;

      @include media-breakpoint-down(xs) {
        display: none;
      }

      &:after,
      &:before {
        content: '';
        position: absolute;
        background: $white;
        width: 2px;
        height: 13px;
        border-radius: 2px;
        top: 6px;
        left: 5px;
      }
      &:after {
        transform: rotate(45deg);
      }

      &:before {
        transform: rotate(-45deg);
      }

      &:hover {
        @include media-breakpoint-up(md) {
          opacity: 1;
          transform: translateY(-50%) scale(1.02);
        }
      }

      &:active {
        transform: translateY(-50%) scale(0.98);
        opacity: 0.5;
      }
    }
  }

  &__btn {
    width: 126px;
    height: 32px;

    &_sign-in {
      width: 117px;
    }
  }

  &__user {
    margin-left: 7px;
    width: 253px;

    @include media-breakpoint-down(sm) {
      width: 30px;
    }
  }
}
</style>
