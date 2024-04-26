<template>
  <div class="more">
    <div @click="openInNewTab" class="more__item">
      <BaseSvg id="open" />
    </div>
    <div @click="copyLink" class="more__item">
      <BaseSvg id="share" />
    </div>
    <div @click="more" class="more__item">
      <BaseSvg id="more" />
    </div>
  </div>
</template>

<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue'
import { useToastStore } from '@/data/store/store.js'
import { computed, toRefs } from 'vue'
const props = defineProps(['id', 'user', 'profile'])
const { id } = toRefs(props)

let page = 'auction'
if (props.user) {
  page = 'user'
}
const pageUrl = computed(() => {
  const url = new URL(import.meta.url)
  if (props.profile) {
    return `http://${url.host}/taste_nft#/account`
  }
  return `http://${url.host}/taste_nft#/${page}/${id.value}`
})

const useToast = useToastStore()

const openInNewTab = () => window.open(pageUrl.value)

function copyLink() {
  toast('link copied')

  navigator.clipboard.writeText(pageUrl.value)
}

function more() {
  toast('Эта кнопка пустая, так как ее нету в макете и в ТЗ')
}

function toast(text) {
  useToast.info.text = text
  useToast.info.current++
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base';

.more {
  width: 136px;
  display: flex;
  gap: 8px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid $whiteOpacityThree;
    border-radius: 12px;
    user-select: none;
    cursor: pointer;
    transition: background-color 300ms ease;

    svg {
      width: 20px;
      height: 20px;
      fill: $white;
      transition: fill 100ms ease;
    }

    &:hover {
      @include media-breakpoint-up(md) {
        background-color: $whiteOpacity;
        svg {
          fill: #1d2228;
        }
      }
    }

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
