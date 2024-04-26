<template>
  <div class="main-user">
    <ul class="main-user__links">
      <li class="main-user__link">
        <a href="https://www.twitch.tv/">
          <BaseSvg id="twitch" />

          <span>twitch</span>
        </a>
      </li>

      <li class="main-user__link">
        <a href="https://www.instagram.com/">
          <BaseSvg id="instagram" />

          <span>Instagram</span>
        </a>
      </li>

      <li class="main-user__link">
        <a href="https://www.twitch.tv/">
          <BaseSvg id="twitter" />

          <span>Twitter</span>
        </a>
      </li>

      <li class="main-user__link">
        <a href="https://onlyfans.com/">
          <BaseSvg id="onlyfans" />

          <span>Onlyfans</span>
        </a>
      </li>
    </ul>

    <p class="main-user__description">
      <span>Description:</span>

      {{ curUser.description }}
    </p>
  </div>
</template>

<script setup>
defineProps(['curUser'])
import BaseSvg from '@/components/Base/BaseSvg.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.main-user {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 37px;

  @include media-breakpoint-down(sm) {
    margin-bottom: 15px;
  }

  &__links {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 386px;
    justify-content: space-between;
    margin-bottom: 16px;

    @include media-breakpoint-down(xs) {
      max-width: unset;
    }
  }

  &__link {
    a {
      color: $white;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: color 300ms ease;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 6px;
      fill: $white;
      transition: fill 300ms ease;
    }

    &:hover {
      @include media-breakpoint-up(md) {
        a {
          color: $whiteOpacity;
        }

        svg {
          fill: $whiteOpacity;
        }
      }
    }

    &:active {
      transform: scale(0.98);
    }
  }

  &__description {
    max-width: 1060px;

    span {
      color: $whiteOpacity;
    }
  }
}
</style>
