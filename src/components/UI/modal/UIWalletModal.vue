<template>
  <UIModal>
    <template #modal-name>Connecting wallet</template>

    <template #modal-main>
      <div class="wallet">
        <div class="wallet__video">
          <UIVideo
            v-for="(video, index) in walletVideo"
            :key="index"
            @click="$emit('videoBtn')"
            :num="video.num"
            :src="url(video.src)"
            :srcset="url(video.srcset)"
            :info="video.info"
            :videoSrc="video.videoSrc"
          />
        </div>

        <div class="wallet__btn">
          <UIButton @click="$emit('walletBtn')">Connect wallet</UIButton>
        </div>
      </div>
    </template>
  </UIModal>
</template>

<script setup>
import UIVideo from '@/components/UI/UIVideo.vue'
import UIButton from '@/components/UI/UIButton.vue'
import { walletVideo } from '@/data/walletVideo.js'
import { url } from '@/components/composable/imgUrl.js'
import UIModal from '@/components/UI/UIModal.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.wallet {
  margin-top: 40px;
  &__video {
    display: flex;
    gap: 57px;
    margin-bottom: 32px;

    @include media-breakpoint-down(sm) {
      width: 65vw;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }

    @include media-breakpoint-down(xs) {
      width: 70vw;
    }
  }

  &__btn {
    width: 157px;
    height: 40px;
    margin: 0 auto;
  }
}
</style>
