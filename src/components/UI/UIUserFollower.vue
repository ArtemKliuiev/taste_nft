<template>
  <div class="user-follower">
    <div class="user-follower__user">
      <UIUser :follower="true" :user="user" />
    </div>
    <div class="user-follower__btn" :class="{ 'user-follower__btn_unfollow': state === 'active' }">
      <UIButton :state="state" @click.stop="subscribe">
        <span v-if="state === 'active'">Follow</span>
        <span v-else>Unfollow</span>
      </UIButton>
    </div>
  </div>
</template>

<script setup>
import UIUser from '@/components/UI/UIUser.vue'
import UIButton from '@/components/UI/UIButton.vue'

import { ref } from 'vue'

const state = ref('active')

function subscribe() {
  if (state.value === 'active') {
    state.value = 'unfollow'
  } else {
    state.value = 'active'
  }
}

defineProps(['user'])
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.user-follower {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 16px 20px;

  @include media-breakpoint-down(sm) {
    padding: 16px 0 16px 10px;
  }

  &__btn {
    flex-shrink: 0;
    width: 110px;
    height: 40px;

    @include media-breakpoint-down(sm) {
      width: 90px;
      height: 40px;
    }
  }
}
</style>
