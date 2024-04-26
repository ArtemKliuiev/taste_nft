<template>
  <div @click="clickCard" class="slider-user">
    <div class="slider-user__image">
      <BasePicture
        :srcset="userInfo.photo.webp"
        :src="userInfo.photo.src"
        :alt="userInfo.photo.alt"
        :lazy="true"
        :width="73"
        :height="73"
      />
    </div>

    <div class="slider-user__title">
      {{ userInfo.name }}
    </div>

    <div class="slider-user__email">
      {{ userInfo.nickname }}
    </div>

    <div class="slider-user__sale">
      {{ userInfo.sales.quantity }} sales on {{ userInfo.sales.sum }}ETH
    </div>
  </div>
</template>

<script setup>
import BasePicture from '@/components/Base/BasePicture.vue'
const props = defineProps(['userInfo'])
import { useRouter } from 'vue-router'
import { nft } from '@/data/nft.js'

const router = useRouter()

function clickCard() {
  router.push('/user/' + props.userInfo.id)
}
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.slider-user {
  overflow: hidden;
  border: 1px solid #333940;
  height: 100%;
  width: 100%;
  cursor: pointer;
  user-select: none;

  &:hover {
    .slider-user__image {
      @include media-breakpoint-up(md) {
        box-shadow: 0 0 30px 0 $whiteOpacityTwo;
      }
    }
  }

  &__image {
    margin: 10% auto 7%;
    width: 33%;
    aspect-ratio: 1/ 1;
    box-shadow: 0 0 15px 0 $whiteOpacityTwo;
    border-radius: 12px;
    transition: box-shadow 300ms ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
      overflow: hidden;
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
    max-width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background: $white;
    }
  }

  &__email {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;
    background: $gradientTwo;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 0 auto;
    max-width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__sale {
    font-weight: 600;
    font-size: 14px;
    color: $whiteOpacity;
    text-align: center;
    margin: 3px auto 8%;
    max-width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
