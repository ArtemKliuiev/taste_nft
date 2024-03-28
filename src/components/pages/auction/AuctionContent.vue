<template>
  <div class="auction-content">
    <div class="auction-content__wrapper">
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
      </div>

      <div class="auction-content__shop"></div>
    </div>
  </div>
</template>

<script setup>
import UIUser from '@/components/UI/UIUser.vue'

defineProps({
  user: {
    type: Object
  },
  nft: {
    type: Object
  }
})
</script>

<style scoped lang="scss">
.auction-content {
  margin-top: 65px;

  &__info {
    font-family: Raleway, sans-serif;
    max-width: 516px;

    &-text {
      margin-top: 20px;

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
      color: rgba(255, 255, 255, 0.5);
      margin-top: 15px;

      span {
        color: white;
      }
    }
  }
}
</style>
