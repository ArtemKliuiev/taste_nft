<template>
  <div class="bid">
    <div class="bid__image">
      <BasePicture
        :src="users[bid.user].photo.src"
        :alt="users[bid.user].name"
        :srcset="users[bid.user].photo.srcset"
      />
    </div>

    <div class="bid__main">
      <div class="bid__main-info">
        <div class="bid__main-title"><span>Bid placed by </span>{{ bid.code }}</div>

        <div class="bid__main-date">{{ bid.date }}</div>
      </div>

      <div class="bid__main-sum">
        <span class="bid__main-logo">
          <BaseSvg id="mini-logo" />
        </span>

        <span class="bid__main-quantity">{{ bid.quantity }}</span>

        <div class="bid__main-price">({{ bid.price }}$)</div>

        <div @click="openUser" class="bid__main-btn">
          <BaseSvg id="open" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { users } from '@/data/user.js'
import BasePicture from '@/components/Base/BasePicture.vue'
import BaseSvg from '@/components/Base/BaseSvg.vue'
import { computed } from 'vue'
const props = defineProps(['bid'])

const pageUrl = computed(() => {
  const url = new URL(import.meta.url)
  return `http://${url.host}/taste_nft#/user/${props.bid.user}`
})

const openUser = () => window.open(pageUrl.value)
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.bid {
  border: 1px solid $midnight;
  min-height: 67px;
  margin: 0 8px 8px 0;
  display: flex;
  align-items: center;

  @include media-breakpoint-down(md) {
    font-size: 12px;
    margin: 0 0 8px 0;
  }

  @include media-breakpoint-down(sm) {
    min-height: 55px;
  }

  &__image {
    box-shadow: 0 0 15px 0 $whiteOpacityTwo;
    border-radius: 8px;
    overflow: hidden;
    margin: 0 10px 0 14px;

    @include media-breakpoint-down(xs) {
      margin: 0 7px 0 10px;
    }

    img {
      width: 32px;
      height: 32px;
      object-fit: cover;
    }
  }

  &__main {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;

    &-title {
      font-weight: 700;
      font-size: 20px;

      @include media-breakpoint-down(sm) {
        font-size: 16px;
      }

      @include media-breakpoint-down(xs) {
        span {
          display: none;
        }
      }
      @include media-breakpoint-down(xxs) {
        font-size: 14px;
      }
    }

    &-date {
      font-weight: 500;
      font-size: 14px;
      color: $whiteOpacity;

      @include media-breakpoint-down(sm) {
        font-size: 12px;
      }

      @include media-breakpoint-down(xs) {
        font-size: 10px;
      }

      @include media-breakpoint-down(xxs) {
        font-size: 8px;
      }
    }

    &-sum {
      display: flex;
      align-items: center;

      @include media-breakpoint-down(sm) {
        font-size: 12px;
      }

      @include media-breakpoint-down(xxs) {
        font-size: 10px;
      }
    }

    &-logo {
      margin: 5px 8px 0 0;

      @include media-breakpoint-down(xs) {
        margin: 5px 5px 0 0;
      }

      svg {
        width: 19px;
        height: 19px;

        @include media-breakpoint-down(xxs) {
          width: 15px;
          height: 15px;
        }
      }
    }

    &-quantity {
      margin-right: 5px;
    }

    &-price {
      margin-right: 12px;

      @include media-breakpoint-down(xs) {
        margin-right: 7px;
      }
    }

    &-btn {
      width: 32px;
      height: 32px;
      border-radius: 12px;
      background: $gradient;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      cursor: pointer;
      margin-right: 15px;

      @include media-breakpoint-down(sm) {
        margin-right: 10px;
      }

      &:active {
        transform: scale(0.98);
      }

      svg {
        width: 20px;
        height: 20px;
        fill: $white;
      }
    }
  }
}
</style>
