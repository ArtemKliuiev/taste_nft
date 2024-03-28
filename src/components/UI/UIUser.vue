<template>
  <div class="user">
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

defineProps({
  user: {
    type: Object
  }
})
</script>

<style lang="scss">
.user {
  display: flex;
  align-items: center;
  gap: 12px;

  &__photo {
    width: 49px;
    height: 49px;
    box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.15);
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

    h4 {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: white;
    }

    p {
      background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin-top: 4px;
    }
  }
}
</style>
