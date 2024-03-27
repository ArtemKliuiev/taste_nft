<template>
  <div ref="drop" @click="toggleActive()" :class="{ dropdown_active: dropActive }" class="dropdown">
    <div class="dropdown__btn">
      <span>{{ 1 }}</span>

      <BaseSvg :id="'dropArrow'" />
    </div>
    <ul class="dropdown__list">
      <li @click="(event) => $emit(id, { message: event })" v-for="(item, id) in list" :key="id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue'
import { ref, onMounted } from 'vue'
defineProps(['list', 'id'])

let dropActive = ref(false)
//let selected = ref(list.value)
const drop = ref()

onMounted(() => {
  window.addEventListener('click', (e) => {
    if (!drop.value.contains(e.target)) {
      dropActive.value = false
    }
  })
})

function toggleActive() {
  dropActive.value = dropActive.value ? false : true
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/base/base';

.dropdown {
  position: relative;
  font-size: 14px;
  width: 160px;
  cursor: pointer;
  user-select: none;

  &__btn {
    width: 100%;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    justify-content: space-between;

    span {
      font-weight: 700;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    svg {
      margin-left: 6px;
      width: 8px;
      height: 5px;
      transition: transform 300ms ease;
      transform-origin: 50% 50%;
    }
  }

  &__list {
    overflow: hidden;
    position: absolute;
    top: 42px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    max-height: 150px;
    overflow-y: auto;
    opacity: 0;
    transform: scaleY(0);
    transition:
      transform 300ms ease,
      opacity 300ms ease;
    transform-origin: 0 0;

    li {
      font-weight: 500;
      padding: 5px 15px;
      margin: 0 auto;
      overflow: hidden;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      transition:
        color 300ms ease,
        background-color 300ms ease;

      &:hover {
        background-color: #fff;
        color: #1d2228;
      }
    }
  }

  &_active {
    .dropdown {
      &__list {
        transform: scaleY(1);
        opacity: 1;
      }

      &__btn {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(255 255 255 / 60%);
    border-radius: 3px;

    &:hover {
      background-color: rgb(255 255 255 / 100%);
    }
  }
  ::-webkit-scrollbar {
    width: 6px;

    @include media-breakpoint-down(sm) {
      width: 6px;
    }
  }
}
</style>
