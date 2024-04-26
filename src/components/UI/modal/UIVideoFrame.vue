<template>
  <UIModal>
    <template #modal-main>
      <div class="video-player">
        <video width="100%" height="100%" controls>
          <source :src="url(videoStore.video)" type="video/mp4" />
        </video>
      </div>
    </template>
  </UIModal>
</template>

<script setup>
import UIModal from '@/components/UI/UIModal.vue'
import { url } from '@/components/composable/imgUrl.js'
import { useVideoStore } from '@/data/store/store.js'

const videoStore = useVideoStore()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.video-player {
  width: 60vw;
  padding: 10px 30px;

  video {
    background: black;
    aspect-ratio: 1.5/1;
  }

  @include media-breakpoint-up(l) {
    width: 60vw;
  }

  @include media-breakpoint-down(md) {
    width: 80vw;
  }

  @include media-breakpoint-down(sm) {
    padding: 20px 15px 15px;
    max-width: 100%;
  }

  @include media-breakpoint-down(xs) {
    padding: 20px 10px 5px;
  }
}
</style>
