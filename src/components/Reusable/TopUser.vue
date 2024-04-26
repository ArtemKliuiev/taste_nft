<template>
  <div class="top-user" :class="{ 'top-user_profile': profile }">
    <div class="top-user__user">
      <UIUser :user="curUser" :profile="true" />
    </div>
    <div class="top-user__main">
      <div class="top-user__followers">
        <div @click="follower(1)" class="top-user__follower">
          <p>{{ quantityFollowers }}</p>

          <span>Followers</span>
        </div>

        <div @click="follower(2)" class="top-user__follower">
          <p>{{ quantityFollowing }}</p>

          <span>Following</span>
        </div>
      </div>

      <div class="top-user__buttons">
        <div class="top-user__btn">
          <UIButton @click="subscribe" :state="state">
            <span v-if="state === 'active'">Follow</span>
            <span v-else>Unfollow</span>
          </UIButton>
        </div>

        <div class="top-user__more">
          <UIMore :user="user" :profile="profile" :id="curUser.id" />
        </div>
      </div>
    </div>
  </div>

  <UIFollowerModal
    :followers="followers"
    :following="following"
    :modalTab="modalTab"
    v-if="modal"
    @closeModal="modal = false"
  />
</template>

<script setup>
import UIUser from '@/components/UI/UIUser.vue'
import UIButton from '@/components/UI/UIButton.vue'
import UIMore from '@/components/UI/UIMore.vue'
import { followers } from '@/data/followers.js'
import { following } from '@/data/following.js'
import { ref } from 'vue'
import UIFollowerModal from '@/components/UI/modal/UIFollowerModal.vue'

defineProps(['curUser', 'profile', 'user'])

const modal = ref(false)
const state = ref('active')
const quantityFollowers = followers.length
const quantityFollowing = following.length
const modalTab = ref(1)

function subscribe() {
  if (state.value === 'active') {
    state.value = 'unfollowTwo'
  } else {
    state.value = 'active'
  }
}

function follower(num) {
  modalTab.value = num
  modal.value = true
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.top-user {
  margin: 97px 0 23px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include media-breakpoint-down(xs) {
    margin: 75px 0 20px 0;
  }

  @include media-breakpoint-down(sm) {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @include media-breakpoint-down(xs) {
    flex-direction: column;
  }

  &__user {
    @include media-breakpoint-down(xs) {
      margin-bottom: 10px;
    }
  }

  &__main {
    display: flex;

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      align-items: flex-end;
      gap: 15px;
    }

    @include media-breakpoint-down(xs) {
      width: 100%;
      margin: 0 auto;
      align-items: center;
    }
  }

  &__followers {
    display: flex;
  }

  &__buttons {
    display: flex;

    @include media-breakpoint-down(xs) {
      width: 100%;
      justify-content: space-between;
    }
  }

  &__follower {
    margin-right: 16px;
    cursor: pointer;
    user-select: none;

    @include media-breakpoint-down(xs) {
      margin-right: 0;

      &:first-child {
        margin-right: 10px;
      }
    }

    p {
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
    }

    span {
      color: $whiteOpacity;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }

  &__btn {
    width: 108px;
    height: 40px;
    margin-right: 12px;
  }

  &_profile {
    .top-user {
      &__btn {
        display: none;
      }

      &__main {
        @include media-breakpoint-down(sm) {
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      }

      &__followers {
        @include media-breakpoint-down(sm) {
          flex: 1 0 auto;
          justify-content: flex-end;
          order: 1;
        }
      }

      &__buttons {
        @include media-breakpoint-down(sm) {
          width: 137px;
        }
      }
    }
  }
}
</style>
