<template>
  <div
    @click="clickUser"
    class="user"
    :class="{ 'user_nft-card': nftCard, user_follower: follower, user_profile: profile }"
  >
    <div class="user__photo">
      <BasePicture :src="user.photo.src" :alt="user.photo.alt" :srcset="user.photo.srcset" />
    </div>

    <div class="user__label">
      <h4>{{ user.name }}</h4>

      <p>{{ user.nickname }}</p>
    </div>
  </div>
</template>

<script setup>
import BasePicture from '@/components/Base/BasePicture.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  user: {
    type: Object
  },
  nftCard: {
    type: Boolean
  },
  follower: {
    type: Boolean
  },
  profile: {
    type: Boolean
  }
})

const router = useRouter()

function clickUser() {
  if (!props.nftCard && !props.profile) {
    router.push('/user/' + props.user.id)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.user {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    .user__label {
      @include media-breakpoint-up(md) {
        opacity: 0.5;
      }
    }
  }

  &__photo {
    width: 49px;
    height: 49px;
    box-shadow: 0 0 15px 0 $whiteOpacityTwo;
    border-radius: 12px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }

  &__label {
    font-family: Raleway, sans-serif;
    transition: opacity 300ms ease;

    h4 {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: white;
    }

    p {
      background: $gradientTwo;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin-top: 4px;
    }
  }
  &_nft-card {
    gap: 8px;

    &:hover {
      .user__label {
        @include media-breakpoint-up(md) {
          opacity: 1;
        }
      }
    }

    .user {
      &__photo {
        width: 26px;
        height: 26px;
        border-radius: 8px;
        flex-shrink: 0;

        img {
          border-radius: 8px;
        }
      }

      &__label {
        width: 100px;
        h4 {
          color: $charcoal;
          font-size: 14px;
          line-height: 16px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        p {
          background: $gradient;
          background-clip: text;
          -webkit-background-clip: text;
          margin: 0;
          font-size: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  &_follower {
    @include media-breakpoint-down(sm) {
      gap: 8px;
    }
    .user {
      &__photo {
        @include media-breakpoint-down(sm) {
          width: 40px;
          height: 40px;
          border-radius: 8px;
        }
      }

      &__label {
        h4 {
          @include media-breakpoint-down(sm) {
            font-size: 14px;
            line-height: 16px;
            max-width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          @include media-breakpoint-down(xs) {
            max-width: 100px;
          }
        }

        p {
          @include media-breakpoint-down(sm) {
            margin: 0;
            font-size: 10px;
            max-width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          @include media-breakpoint-down(xs) {
            max-width: 100px;
          }
        }
      }
    }
  }

  &_profile {
    cursor: unset;

    &:hover {
      .user__label {
        @include media-breakpoint-up(md) {
          opacity: 1;
        }
      }
    }
  }
}
</style>
