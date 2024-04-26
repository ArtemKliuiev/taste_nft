<template>
  <UIModal block="true" follower="true">
    <template #modal-name>
      <div class="modal-tabs">
        <div
          class="modal-tabs__tab"
          @click="changeTab(1)"
          :class="{ 'modal-tabs__tab_active': curTab === 1 }"
        >
          Following
        </div>
        <div
          class="modal-tabs__tab"
          @click="changeTab(2)"
          :class="{ 'modal-tabs__tab_active': curTab === 2 }"
        >
          Followers
        </div>
      </div>
    </template>

    <template #modal-main>
      <div class="follower-card">
        <div v-if="curTab === 1" class="follower-card__main">
          <UIUserFollower v-for="(user, index) in followers" :user="user" :key="index" />
        </div>

        <div v-if="curTab === 2" class="follower-card__main">
          <UIUserFollower v-for="(user, index) in following" :user="user" :key="index" />
        </div>
      </div>
    </template>
  </UIModal>
</template>

<script setup>
import UIModal from '@/components/UI/UIModal.vue'
import { ref } from 'vue'
import UIUserFollower from '@/components/UI/UIUserFollower.vue'
const props = defineProps(['modalTab', 'followers', 'following'])
const curTab = ref(props.modalTab)

function changeTab(num) {
  curTab.value = num
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.modal-tabs {
  width: 100%;
  height: 40px;
  display: flex;
  gap: 24px;
  margin-bottom: 9px;

  &__tab {
    color: $whiteOpacity;
    cursor: pointer;
    user-select: none;
    transition: color 300ms ease;

    &:hover {
      @include media-breakpoint-up(md) {
        color: $whiteOpacityFour;
      }
    }

    &_active {
      color: $white;

      &:hover {
        color: $white;
      }
    }
  }
}

.follower-card {
  overflow: hidden;
  width: 620px;

  @include media-breakpoint-down(sm) {
    width: 80vw;
  }

  &__main {
    height: 390px;
    overflow: auto;
    padding-right: 7px;
  }

  ::-webkit-scrollbar-thumb {
    @include media-breakpoint-up(sm) {
      border-radius: 4px;
    }
  }
}
</style>
