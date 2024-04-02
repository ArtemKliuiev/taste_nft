<template>
  <div class="nft">
    <div class="nft__image">
      <div class="nft__user">
        <UIUser :user="users[nftInfo.user]" :nftCard="true" />
      </div>

      <BasePicture :srcset="nftInfo.photo.webp" :src="nftInfo.photo.src" :alt="'logo'" />
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

        <span class="nft__ending-date">{{ timer }}</span>
      </div>
      <div class="nft__buy-now" v-else>
        <span>Buy right now</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { users } from '@/data/user.js'
import UIUser from '@/components/UI/UIUser.vue'
import BaseSvg from '@/components/Base/BaseSvg.vue'
import BasePicture from '@/components/Base/BasePicture.vue'
import { onMounted, ref } from 'vue'
const { nftInfo } = defineProps(['nftInfo'])

const timer = ref(nftInfo.price.time)

if (nftInfo.type === 'auction') {
  onMounted(() => {
    countdown(nftInfo.price.time)
    timer.value = `${timer.value}h 00m 00s`
  })
}

function countdown(hours) {
  if (hours < 1 || hours > 24) {
    return
  }

  let totalSeconds = hours * 3600

  let interval = setInterval(function () {
    let hoursLeft = Math.floor(totalSeconds / 3600)
    let minutesLeft = Math.floor((totalSeconds % 3600) / 60)
    let secondsLeft = totalSeconds % 60

    timer.value =
      (hoursLeft < 10 ? '0' : '') +
      hoursLeft +
      'h ' +
      (minutesLeft < 10 ? '0' : '') +
      minutesLeft +
      'm ' +
      (secondsLeft < 10 ? '0' : '') +
      secondsLeft +
      's'

    if (totalSeconds === 0) {
      clearInterval(interval)
    } else {
      totalSeconds--
    }
  }, 1000)
}
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.nft {
  position: relative;
  width: 100%;
  border: 1px solid rgb(51, 57, 64);

  &__image {
    background: #8743ff;
    aspect-ratio: 1/1;

    img {
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
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    background: #fff;
    padding: 6px 12px 6px 10px;
    max-width: 60%;

    &-logo {
    }

    &-name {
    }

    &-login {
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
