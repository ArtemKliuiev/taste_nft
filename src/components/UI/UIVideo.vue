<template>
  <div @click="changeLink" class="video">
    <div class="video__image">
      <div class="video__image-number">{{ num }}.</div>
      <div class="video__image-play">
        <BaseSvg id="play" />
      </div>
      <div class="video__img">
        <BasePicture :srcset="srcset" :src="src" :alt="'video'" />
      </div>
    </div>
    <div class="video__title">{{ info }}</div>
  </div>
</template>

<script setup>
import BasePicture from '@/components/Base/BasePicture.vue'
import BaseSvg from '@/components/Base/BaseSvg.vue'
const props = defineProps(['num', 'srcset', 'src', 'info', 'videoSrc'])

import { useVideoStore, useOpenVideoModalStore } from '@/data/store/store.js'

const videoStore = useVideoStore()
const openVideo = useOpenVideoModalStore()

function changeLink() {
  videoStore.video = props.videoSrc
  openVideo.value = true
}
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.video {
  height: 100%;
  max-width: 160px;

  &__image {
    position: relative;
    margin-bottom: 11px;
    border-radius: 16px;
    z-index: 200;
    top: 0;
    left: 0;
    cursor: pointer;

    &:hover {
      @include media-breakpoint-up(md) {
        .video__image {
          &-play {
            svg {
              transform: scale(1.2);
            }
          }
        }
        img {
          @include media-breakpoint-up(md) {
            transform: scale(1);
          }
        }
      }
    }

    &:active {
      .video__image-play {
        svg {
          transform: scale(1);
        }
      }
    }

    &-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      svg {
        width: 22px;
        height: 22px;
        transition: transform 200ms ease-out 0s;
      }
    }

    &-number {
      position: absolute;
      top: -28px;
      left: -10px;
      border-radius: 16px;
      box-shadow: 0 2px 15px 0 $whiteOpacityTwo;
      background: $white;
      width: 40px;
      height: 40px;
      color: $grayFour;
      font-size: 20px;
      font-weight: 700;
      line-height: 40px;
      text-align: center;

      @include media-breakpoint-down(sm) {
        top: -12px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        border-radius: 10px;
      }
    }
  }

  &__img {
    position: relative;
    z-index: -1;
    overflow: hidden;
    border-radius: 16px;
    width: 160px;
    height: 90px;
    object-fit: cover;

    img {
      transition: transform 300ms ease;
      width: 100%;
      object-fit: cover;
      transform: scale(1.02);
    }
  }

  &__title {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
  }
}
</style>
