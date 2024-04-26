<template>
  <div class="main-slider">
    <div class="container">
      <div class="main-slider__main">
        <div class="main-slider__info">
          <div class="main-slider__user">
            <UIUser :user="curUs" />
          </div>

          <div class="main-slider__title">
            {{ curNft.description.title }}
          </div>

          <div class="main-slider__description">
            <span>Description:</span>
            {{ curNft.description.text }}
          </div>

          <div class="main-slider__sold">
            <div class="main-slider__sold-left">
              <span class="main-slider__sold-title">Sold for:</span>

              <BaseSvg id="mini-logo" />
              <span class="main-slider__sold-quantity">
                {{ curNft.price.quantity }}
              </span>
            </div>

            <div class="main-slider__sold-right">
              <div class="main-slider__btn">
                <UIButton @click="clickView">View</UIButton>
              </div>

              <UIMore :id="curNft.id" />
            </div>
          </div>
        </div>

        <div class="main-slider__slider">
          <Slider @activeSlide="(e) => (curNft = e)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIUser from '@/components/UI/UIUser.vue'
import { users } from '@/data/user.js'
import BaseSvg from '@/components/Base/BaseSvg.vue'
import UIButton from '@/components/UI/UIButton.vue'
import UIMore from '@/components/UI/UIMore.vue'
import Slider from '@/components/pages/main/CoverflowSlider.vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const curUs = ref(users[0])
const curNft = ref({
  price: {
    quantity: ''
  },
  user: 0,
  description: {
    title: '',
    text: ''
  },
  id: 0
})

watch(curNft, () => {
  curUs.value = users[curNft.value.user]
})

function clickView() {
  router.push('/auction/' + curNft.value.id)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.main-slider {
  margin: 96px 0 64px 0;

  @include media-breakpoint-down(md) {
    margin: 96px 0 40px 0;
  }

  @include media-breakpoint-down(sm) {
    margin: 96px 0 30px 0;
  }

  @include media-breakpoint-down(xs) {
    margin: 75px 0 20px 0;
  }

  @include media-breakpoint-down(xxs) {
    margin: 75px 0 15px 0;
  }

  &__main {
    display: flex;
    min-height: 548px;
    gap: 16px;

    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  &__info {
    flex: 1 1 39.6%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @include media-breakpoint-down(md) {
      max-width: 80vw;
      margin: 0 auto;
    }

    @include media-breakpoint-down(xs) {
      max-width: unset;
    }

    ::-webkit-scrollbar {
      @include media-breakpoint-up(sm) {
        width: 3px;
      }
    }

    ::-webkit-scrollbar-thumb {
      @include media-breakpoint-up(sm) {
        border-radius: 3px;
      }
    }
  }

  &__slider {
    width: 100%;
    height: 100%;
    min-height: 548px;
    flex: 1 1 60.4%;

    @include media-breakpoint-down(md) {
      min-height: unset;
    }
  }

  &__user {
    margin-bottom: 14px;
    transition: opacity 300ms ease;
  }

  &__title {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 7px;
    transition: opacity 300ms ease;

    @include media-breakpoint-down(xs) {
      font-size: 22px;
    }
  }

  &__description {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    margin-bottom: 16px;
    height: 72px;
    overflow: hidden;
    transition: opacity 300ms ease;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;

    @include media-breakpoint-down(md) {
      height: 90px;
      -webkit-line-clamp: 5;
    }

    span {
      opacity: 0.5;
    }
  }

  &__sold {
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;

    @include media-breakpoint-down(xs) {
      margin-bottom: 30px;
      display: block;
    }

    &-left {
      display: flex;
      align-items: center;

      @include media-breakpoint-down(xs) {
        justify-content: center;
        margin-bottom: 15px;
      }

      svg {
        width: 19px;
        height: 19px;
        margin-right: 5px;
      }
    }

    &-title {
      font-weight: 600;
      font-size: 14px;
      opacity: 0.5;
      margin-right: 11px;
    }

    &-quantity {
      transition: opacity 300ms ease;
    }

    &-right {
      display: flex;

      @include media-breakpoint-down(xs) {
        justify-content: space-between;
      }
    }
  }

  &__btn {
    height: 40px;
    width: 97px;
    margin-right: 12px;

    @include media-breakpoint-down(xs) {
      width: 120px;
    }
  }
}
</style>
