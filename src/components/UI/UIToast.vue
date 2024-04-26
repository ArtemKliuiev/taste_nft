<template>
  <Transition name="toast">
    <div class="toast" v-if="show">
      <div @click="show = false" class="toast__close"></div>
      <div class="toast__info">{{ info }}</div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useToastStore } from '@/data/store/store.js'

const useToast = useToastStore()
const show = ref(false)
const info = ref(false)

function showToast(text) {
  closeTimer()
  if (show.value) {
    show.value = false
  }

  setTimeout(() => {
    show.value = true
    info.value = text
  }, 100)
}

let setTime

function closeTimer() {
  const interval = 2000

  if (setTime) {
    clearTimeout(setTime)
  }

  setTime = setTimeout(() => {
    show.value = false
  }, interval)
}

watch(useToast, () => {
  showToast(useToast.info.text)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.toast-enter-active,
.toast-leave-active {
  transition: opacity 1s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}

.toast {
  background-color: $midnight;
  border-radius: 10px;
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 100;
  padding: 15px 15px 15px 35px;
  max-width: 300px;
  transition: opacity 300ms ease;

  @include media-breakpoint-down(sm) {
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    padding: 15px 20px;
    max-width: 80vw;
  }

  &__close {
    position: absolute;
    left: 10px;
    top: 18px;
    height: 16px;
    width: 16px;
    padding: 10px;
    cursor: pointer;
    transition: opacity 300ms ease 0s;

    @include media-breakpoint-down(sm) {
      display: none;
    }

    &:after,
    &:before {
      content: '';
      position: absolute;
      top: 1px;
      left: 8px;
      width: 2px;
      height: 15px;
      border-radius: 2px;
      background: $white;
    }

    &:after {
      transform: rotate(45deg);
    }

    &:before {
      transform: rotate(-45deg);
    }

    &:hover {
      @include media-breakpoint-up(md) {
        opacity: 0.5;
      }
    }

    &:active {
      transform: scale(0.9);
    }
  }
}
</style>
