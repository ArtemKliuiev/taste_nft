<template>
  <div class="nft" @click="clickNft">
    <div class="nft__image">
      <div @click.stop="clickUser" class="nft__user" :class="{ nft__user_profile: profile }">
        <div v-if="profile" class="nft__status">
          <span class="nft__status_approved" v-if="nftInfo.status === 'approved'">Approved</span>
          <span class="nft__status_moderation" v-if="nftInfo.status === 'moderation'"
            >On moderation</span
          >
          <span class="nft__status_declined" v-if="nftInfo.status === 'declined'">Declined</span>
        </div>

        <UIUser v-else :user="users[nftInfo.user]" :nftCard="true" />
      </div>

      <div
        v-if="profile"
        class="nft__more"
        :class="{ nft__more_open: more, nft__more_moderation: nftInfo.status === 'moderation' }"
      >
        <div @click.stop="more = !more" class="nft__more-btn nft__more-show">
          <BaseSvg id="more" />
        </div>

        <div @click.stop="toast('not yet available')" class="nft__more-btn nft__more-timer">
          <BaseSvg id="timer" />
        </div>

        <div @click.stop="toast('You can\'t edit')" class="nft__more-btn nft__more-edit">
          <BaseSvg id="edit" />
        </div>

        <div @click.stop="toast('Will be removed soon')" class="nft__more-btn nft__more-delete">
          <BaseSvg id="delete" />
        </div>
      </div>

      <BasePicture
        class="nft__img"
        :srcset="nftInfo.photo.webp"
        :src="nftInfo.photo.src"
        :width="nftInfo.photo.width"
        :height="nftInfo.photo.height"
        :lazy="true"
        :alt="nftInfo.photo.alt"
      />
    </div>

    <div class="nft__main">
      <h3 class="nft__title">{{ nftInfo.description.title }}</h3>
      <div class="nft__row nft__sold">
        <span class="nft__sold-info">Sold for:</span>

        <div class="nft__sold-price">
          <BaseSvg id="mini-logo" v-if="nftInfo.type === 'auction'" />
          <BaseSvg id="nft-logo" v-if="nftInfo.type === 'default'" />

          <span>1,5M</span>
        </div>
      </div>

      <div class="nft__row nft__ending" v-if="nftInfo.type === 'auction'">
        <span class="nft__ending-info">Ending in:</span>

        <span translate="no" class="nft__ending-date">{{ timer }}</span>
      </div>
      <div class="nft__buy-now" v-else>
        <span>Buy right now</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { users } from '@/data/user.js'
import UIUser from '@/components/UI/UIUser.vue'
import BaseSvg from '@/components/Base/BaseSvg.vue'
import BasePicture from '@/components/Base/BasePicture.vue'
import { countdown } from '@/components/composable/timer.js'
import { useRouter } from 'vue-router'
import { toast } from '@/components/composable/toast.js'
const props = defineProps(['nftInfo', 'profile'])
const timer = ref(props.nftInfo.price.time)
const more = ref(false)

const router = useRouter()

function clickNft() {
  router.push('/auction/' + props.nftInfo.id)
}

function clickUser() {
  router.push('/user/' + props.nftInfo.user)
}

if (props.nftInfo.type === 'auction') {
  onMounted(() => {
    countdown(props.nftInfo.price.time, timer)
  })
}
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.nft {
  cursor: pointer;
  position: relative;
  width: 100%;
  color: $white;
  border: 1px solid $midnight;
  margin-bottom: 16px;

  &:hover {
    .nft {
      &__img {
        img {
          @include media-breakpoint-up(md) {
            width: 105%;
            height: 105%;
          }
        }
      }
    }
  }

  &__image {
    user-select: none;
    aspect-ratio: 1/1;
    overflow: hidden;

    img {
      transition:
        width 0.5s ease 0s,
        height 0.5s ease 0s;
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__user {
    position: absolute;
    top: 12px;
    left: 16px;
    height: 44px;
    border-radius: 12px;
    box-shadow: 0 1px 10px 0 $boxShadow;
    background: #fff;
    padding: 6px 12px 6px 10px;
    max-width: 60%;
    transition: transform 300ms ease 0s;
    display: grid;
    align-items: center;

    &:hover {
      @include media-breakpoint-up(md) {
        transform: scale(1.03);
      }
    }

    &_profile {
      &:hover {
        @include media-breakpoint-up(md) {
          transform: scale(1);
        }
      }
    }
  }

  &__status {
    font-size: 16px;
    font-weight: 600;

    &_approved {
      color: $green;
    }

    &_moderation {
      color: $yellow;
    }

    &_declined {
      color: $red;
    }
  }

  &__more {
    &-btn {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 22px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        fill 300ms ease,
        transform 300ms ease,
        top 300ms ease;

      &:hover {
        @include media-breakpoint-up(md) {
          transform: scale(1.1);
        }
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }

    &-show {
      z-index: 2;
      fill: $black;
    }

    &-timer {
      fill: $black;
    }

    &-edit {
      fill: $green;
    }

    &-delete {
      fill: $red;
    }

    &_open {
      .nft__more {
        &-show {
          background-color: $whiteOpacity;
          fill: $white;
        }

        &-timer {
          top: 65px;
        }

        &-edit {
          top: 110px;
        }

        &-delete {
          top: 155px;
        }
      }
    }

    &_moderation {
      .nft__more {
        &-edit {
          display: none;
        }

        &-delete {
          display: none;
        }
      }
    }
  }

  &__main {
    margin: 22px 12px 11px 16px;

    @include media-breakpoint-down(md) {
      margin: 10px;
    }
  }

  &__row {
    font-weight: 600;
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 20px;
    margin-bottom: 11px;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @include media-breakpoint-down(xs) {
      max-width: 80vw;
    }
  }

  &__sold {
    margin-bottom: 7px;
    &-info {
      font-size: 14px;
    }

    &-price {
      font-size: 16px;
      margin-right: 14%;
      display: flex;
      align-items: center;
      gap: 5px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &__ending {
    &-info {
      font-size: 14px;
    }

    &-date {
      margin-right: 1.2%;
    }
  }

  &__buy-now {
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
  }
}
</style>
