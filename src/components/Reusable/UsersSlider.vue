<template>
  <swiper
    class="user-swiper"
    :slides-per-view="1.1"
    :space-between="16"
    :modules="modules"
    :scrollbar="{
      draggable: true
    }"
    :breakpoints="{
      '320': {
        slidesPerView: 1.1
      },
      '375': {
        slidesPerView: 2.1
      },
      '576': {
        slidesPerView: 3.1
      },
      '768': {
        slidesPerView: 4.1
      },
      '1024': {
        slidesPerView: 5.1
      }
    }"
  >
    <swiper-slide v-for="(user, index) in sliderUsers" :key="index">
      <UISliderUser :userInfo="user" />
    </swiper-slide>
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper/modules'
import { users } from '@/data/user.js'
import UISliderUser from '@/components/UI/UISliderUser.vue'

const sliderUsers = users.filter((user, id) => id < 10)

const modules = [Scrollbar]

import 'swiper/css/scrollbar'

import 'swiper/css'
import { onMounted } from 'vue'
</script>
<style lang="scss">
@import '@/assets/scss/base/base';

.user-swiper {
  padding-bottom: 25px;
}
.swiper-slide {
  width: 100%;
}

.swiper-scrollbar {
  width: 100vw !important;
  height: 5px !important;
  left: 0 !important;
  max-width: 100% !important;
  background: unset;

  @include media-breakpoint-down(sm) {
    display: none !important;
  }
}

.swiper-scrollbar-drag {
  background-color: $whiteOpacity;

  &:hover {
    background: $gradient;
  }

  &:active {
    background: $gradient;
  }
}
</style>
