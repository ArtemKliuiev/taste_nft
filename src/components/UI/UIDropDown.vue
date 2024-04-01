<template>
  <div
    ref="currentDrop"
    @click="toggleActive"
    :class="{ dropdown_active: dropActive }"
    class="dropdown"
  >
    <div class="dropdown__btn">
      <span>{{ selected ? selected : list[0] }}</span>

      <BaseSvg :id="'dropArrow'" />
    </div>
    <ul class="dropdown__list">
      <li @click="select(item)" v-for="(item, id) in list" :key="id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue'
import { ref, onMounted } from 'vue'
defineProps(['list', 'id'])
const emit = defineEmits(['submit'])

const dropActive = ref(false)
const selected = ref('')
const currentDrop = ref(null)

function select(li) {
  selected.value = li

  emit('submit', li)
}

onMounted(() => window.addEventListener('click', checkClick))

function toggleActive() {
  dropActive.value = !dropActive.value
}
function checkClick(e) {
  if (dropActive.value && !currentDrop.value.contains(e.target)) {
    dropActive.value = false
  }
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

  @include media-breakpoint-down(xs) {
    width: calc(50vw - 21px);
    font-size: 12px;
  }

  &__btn {
    width: 100%;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    justify-content: space-between;

    @include media-breakpoint-down(xs) {
      height: 35px;
    }

    @include media-breakpoint-down(xxs) {
      padding: 0 15px;
    }

    span {
      width: 100%;
      text-align: center;
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
    z-index: 10;
    top: 41px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    background: #1d2228;
    max-height: 150px;
    overflow-y: auto;
    opacity: 0;
    transform: scaleY(0);
    transition:
      transform 300ms ease,
      opacity 300ms ease;
    transform-origin: 0 0;

    @include media-breakpoint-down(xs) {
      top: 37px;
    }

    li {
      font-weight: 500;
      padding: 5px 15px;
      margin: 0 auto;
      overflow: hidden;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;

      &:hover {
        background-color: #fff;
        color: #1d2228;
        transition:
          color 300ms ease,
          background-color 300ms ease;
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
