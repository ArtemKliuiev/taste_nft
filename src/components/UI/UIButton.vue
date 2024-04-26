<template>
  <button class="btn" :class="{ 'btn_disabled': state === 'disabled', 'btn_unfollow' : state === 'unfollow' || state === 'unfollowTwo','btn_unfollow-two': state ===  'unfollowTwo'}">
    <slot />
  </button>
</template>

<script setup>
defineProps(['state'])
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.btn {
  position: relative;
  z-index: 3;
  box-shadow: 0 15px 30px 0 $boxShadowTwo;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: $white;
  background: unset;
  font-family: Raleway, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  border: none;
  cursor: pointer;
  overflow: hidden;

  @include media-breakpoint-down(xxs) {
    font-size: 10px;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    background: $gradient;
    transition: opacity 300ms ease 0s;
    width: 100%;
    height: 100%;
  }

  &:after {
    content: '';
    position: absolute;
    top: -25%;
    left: -35%;
    background: $white;
    height: 150%;
    width: 1px;
    opacity: 0.5;
    transform: rotate(30deg);
    box-shadow: 0 0 15px 15px $white;
  }

  &:hover {
    &:after {
      @include media-breakpoint-up(md) {
        animation: flash 300ms ease;
      }
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &_disabled {
    background: $gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 700;
    line-height: 16px;
    box-shadow: unset;
    cursor: default;

    &:hover {
      &:after {
        animation: unset;
      }
    }

    &:before {
      opacity: 0.2;
    }
  }

  &_unfollow{
    box-shadow: unset;


    span{
      position: relative;
      background: $gradientTwo;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: 700;
      font-size: 14px;
      height: 100%;
      line-height: 40px;
      width: 100% ;

      &:after{
        content: '';
        position: absolute;
        opacity: 1;
        top: 50%;
        left: 50%;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        z-index: -2;
        background-color: $midnight;
        border-radius: 12px;
        transform:translate(-50%, -50%);
        transition: opacity 300ms ease;

      }
    }

    &:before{
      position: absolute;
      background: $gradientTwo;


    }

    &:after{
      display: none;
    }

    &:hover {
      span{
        &:after {
          opacity: 0.95;
        }
      }

    }

    &-two{
      span{
        &:after{
          background: $charcoal;
        }
      }
    }
  }
}

@keyframes flash {
  0% {
    left: -35%;
  }
  100% {
    left: 135%;
  }
}
</style>
