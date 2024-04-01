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
          <BaseSvg id="mini-logo" />
          <span>1,5M</span>
        </div>
      </div>

      <div class="nft__row nft__ending">
        <span class="nft__ending-info">Ending in:</span>

        <span class="nft__ending-date">05h 02m 41s</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { users } from '@/data/user.js'
import UIUser from '@/components/UI/UIUser.vue'
import BaseSvg from '@/components/Base/BaseSvg.vue'
import BasePicture from '@/components/Base/BasePicture.vue'
const { nftInfo } = defineProps(['nftInfo'])

console.log(nftInfo)
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.nft {
  background: burlywood;
  width: 100%;

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
    &-logo {
    }

    &-name {
    }

    &-login {
    }
  }

  &__main {
  }

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__title {
  }

  &__sold {
    &-info {
    }

    &-price {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &__ending {
    &-info {
    }

    &-date {
    }
  }
}
</style>
