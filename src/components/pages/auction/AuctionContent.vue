<template>
  <div class="auction-content">
    <div class="auction-content__wrapper">
      <div class="auction-content__main">
        <div class="auction-content__info">
          <UIUser :user="user" />

          <div class="auction-content__info-text">
            <h3>{{ nft.description.title }}</h3>

            <p v-if="nft.type === 'auction'">
              Copy: <span>{{ nft.description.count }}</span>
            </p>

            <p>
              Description: <span>{{ nft.description.text }}</span>
            </p>
          </div>

          <div class="auction-content__info-more">
            <UIMore :id="nft.id" />
          </div>
        </div>

        <div class="auction-content__shop">
          <h3 class="auction-content__shop-title">Activity</h3>

          <div class="auction-content__shop-main">
            <UIAuctionBid v-for="(bid, index) in sortBids" :key="index" :bid="bid" />
          </div>
        </div>
      </div>

      <AuctionNfts />
    </div>
  </div>
</template>

<script setup>
import UIUser from '@/components/UI/UIUser.vue'
import UIMore from '@/components/UI/UIMore.vue'
import UIAuctionBid from '@/components/UI/UIAuctionBid.vue'
import { bids } from '@/data/bids.js'
import AuctionNfts from '@/components/pages/auction/AuctionNfts.vue'

defineProps({
  user: {
    type: Object
  },
  nft: {
    type: Object
  }
})

const sortBids = bids.sort((a, b) => b.price - a.price)
</script>

<style scoped lang="scss">
@import '@/assets/scss/base/base.scss';

.auction-content {
  margin-top: 65px;

  &__wrapper {
  }

  &__main {
    display: flex;
    gap: 24px;

    margin-bottom: 88px;

    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  &__info {
    flex: 1 1 40%;
    font-family: Raleway, sans-serif;
    max-width: 516px;

    @include media-breakpoint-down(md) {
      max-width: unset;
      margin-bottom: 20px;
    }

    &-text {
      margin: 20px 0 18px 0;

      h3 {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
      }
    }

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: $whiteOpacity;

      &:nth-child(2) {
        margin-top: 13px;
      }

      &:nth-child(3) {
        margin-top: 9px;
      }

      span {
        color: $white;
      }
    }
  }

  &__shop {
    flex: 1 1 60%;
    overflow: hidden;
    width: 100%;
    height: 492px;

    @include media-breakpoint-down(md) {
      height: unset;
    }

    &-title {
      font-size: 18px;
      margin: 2px 0 13px 0;
    }

    &-main {
      overflow: auto;
      height: 90%;
    }

    ::-webkit-scrollbar {
      @include media-breakpoint-up(sm) {
        width: 5px;
      }
    }

    ::-webkit-scrollbar-thumb {
      @include media-breakpoint-up(sm) {
        background: $whiteOpacity;
        border-radius: 5px;
      }

      &:hover {
        @include media-breakpoint-up(md) {
          background: $gradient;
        }
      }
    }
  }
}
</style>
