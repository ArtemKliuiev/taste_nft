<template>
  <div class="auction-banner">
    <picture>
      <source type="image/webp" :srcset="image.webp" />
      <img
        class="auction-banner__background"
        :src="image.src"
        :width="image.width"
        :height="image.height"
        :alt="image.alt"
      />
    </picture>

    <div class="auction-banner__label" v-if="type === 'default'">
      <div class="auction-banner__label-price">
        <h6>Price:</h6>

        <div class="price">
          <img src="@/assets/images/logo.svg" alt="logo" />

          <p>
            {{ price.quantity }} <span>( {{ price.value }} )</span>
          </p>
        </div>
      </div>

      <div class="auction-banner__label-btn">
        <UIButton>Buy art</UIButton>
      </div>
    </div>

    <div
      class="auction-banner__label"
      :class="{ 'auction-banner__label_auction': type === 'auction' }"
      v-if="type === 'auction'"
    >
      <div class="auction-banner__label-price">
        <h6>Current Bid::</h6>

        <div class="price">
          <img src="@/assets/images/logo.svg" alt="logo" />

          <p>
            {{ price.quantity }} <span>( {{ price.value }} )</span>
          </p>
        </div>
      </div>

      <div class="auction-banner__label-price">
        <h6>Auction ending in:</h6>

        <div class="price">
          <p>
            {{ timer }}
          </p>
        </div>
      </div>

      <div class="auction-banner__label-btn">
        <UIButton>Place a bid</UIButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'
import UIButton from '@/components/UI/UIButton.vue'

const props = defineProps({
  image: Object,
  type: String,
  price: Object
})

const timer = ref(props.price.time)
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

onMounted(() => {
  countdown(props.price.time)
  timer.value = `${timer.value}h 00m 00s`
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/base/base.scss";

.auction-banner {
  position: relative;
  padding-top: 44%;

  @include media-breakpoint-down(xs) {
    padding-top: unset;
    height: 400px;
  }

  &__background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__label {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(48, 54, 61, 1);
    border-radius: 16px;
    padding: 15px 20px;
    font-family: Raleway, sans-serif;
    bottom: -35px;
    display: flex;
    min-width: 350px;
    gap: 38px;
    white-space: nowrap;

    @include media-breakpoint-down(xs) {
      flex-direction: column;
      min-width: unset;
      width: 90%;
      margin: 0 auto;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      background: rgba(255, 255, 255, 0.15);
      width: 3px;
      height: 60%;
      border-radius: 12px;
      transform: translate(-50%, -50%);

      @include media-breakpoint-down(xs) {
        display: none;
      }
    }

    h6 {
      margin: 0;
      font-weight: 600;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }

    .price {
      display: flex;
      align-items: center;
      gap: 5px;

      @include media-breakpoint-down(xs) {
        justify-content: center;
      }

      p {
        font-weight: 600;
        color: white;
        font-size: 16px;

        span {
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }

    &-price {
      width: 100%;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        bottom: -20px;
        background: rgba(255, 255, 255, 0.15);
        display: none;

        @include media-breakpoint-down(xs) {
          display: block;
        }
      }
    }

    &-btn {
      width: 100%;

      button {
        padding: 12px 0;
      }
    }

    &_auction {
      min-width: 518px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      @include media-breakpoint-down(xs) {
        min-width: unset;
        grid-template-columns: repeat(1, 1fr);
        width: 90%;
        margin: 0 auto;
        text-align: center;
      }

      .auction-banner__label-price {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -20px;
          background: rgba(255, 255, 255, 0.15);
          width: 3px;
          height: 100%;
          border-radius: 12px;
          transform: translateY(-50%);

          @include media-breakpoint-down(xs) {
            display: none;
          }
        }
      }

      &::after {
        display: none;
      }
    }
  }
}
</style>
