<template>
  <div @click="clickPast" class="modal" :class="{ modal_follower: follower }">
    <div ref="modal" class="modal__wrapper">
      <div @click="close" class="modal__close modal__close-main"></div>

      <div class="modal__title">
        <slot name="modal-name"></slot>
      </div>

      <div class="modal__main">
        <slot name="modal-main"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const emit = defineEmits(['closeModal'])
const props = defineProps(['block', 'follower'])

const modal = ref(null)

function close() {
  emit('closeModal')
}

onMounted(() => {
  if (props.block) {
    document.body.style.overflow = 'hidden'
  }
})

onUnmounted(() => {
  if (props.block) {
    document.body.style.overflow = 'auto'
  }
})

function clickPast(e) {
  if (modal.value) {
    if (!modal.value.contains(e.target)) {
      close()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.modal {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $modalBgColor;
  overflow: auto;
  display: grid;
  align-items: center;
  justify-content: center;

  &__wrapper {
    margin: 30px 0;
    position: relative;
    padding: 41px 28px 28px;
    border-radius: 32px;
    box-shadow: 0 25px 40px 0 $boxShadow;
    background: $midnight;

    @include media-breakpoint-down(sm) {
      padding: 30px 20px 20px;
    }
  }

  &__close {
    position: absolute;
    height: 16px;
    width: 16px;
    padding: 10px;
    cursor: pointer;
    transition: opacity 300ms ease 0s;

    &:after,
    &:before {
      content: '';
      position: absolute;
      top: 1px;
      left: 8px;
      width: 2px;
      height: 20px;
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

    &-main {
      right: 22px;
      top: 49px;

      @include media-breakpoint-down(sm) {
        right: 20px;
        top: 20px;
      }
    }

    &-video {
      right: 22px;
      top: 20px;
    }
  }

  &__title {
    padding: 0 40px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;

    @include media-breakpoint-down(sm) {
      font-size: 20px;
    }

    @include media-breakpoint-down(xs) {
      font-size: 18px;
    }
  }

  &_follower {
    .modal {
      &__wrapper {
        padding: 41px 8px 28px 8px;

        @include media-breakpoint-down(sm) {
          padding: 35px 8px 28px 0;
        }
      }

      &__title {
        padding: 0 40px 0 0;
        @include media-breakpoint-down(sm) {
          padding: 0 40px 0 20px;
        }
      }
    }
  }
}
</style>
