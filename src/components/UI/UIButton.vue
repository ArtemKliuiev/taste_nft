<script setup></script>

<template>
  <button><slot></slot></button>
</template>

<style scoped lang="scss">
@import '@/assets/scss/base/base';

button {
  position: relative;
  box-shadow: 0px 15px 30px 0px rgba(20, 102, 204, 0.16);
  background: linear-gradient(270deg, rgb(135, 67, 255), rgb(65, 54, 241) 100%);
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: rgb(255, 255, 255);
  font-family: Raleway, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  border: none;
  cursor: pointer;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: -25%;
    left: -30%;
    background: #fff;
    height: 150%;
    width: 1px;
    opacity: 0.5;
    transform: rotate(30deg);
    box-shadow: 0 0 15px 15px #fff;
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
}

@keyframes flash {
  0% {
    left: -30%;
  }
  100% {
    left: 130%;
  }
}
</style>
