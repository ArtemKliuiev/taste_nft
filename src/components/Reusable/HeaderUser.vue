<template>
  <div ref="profile" class="profile">
    <UIHeaderUser @click="toggle" :active="active" :adaptive="true" />

    <ul :class="{ profile__list_active: active }" class="profile__list">
      <li class="profile__list-address">
        Address: <span> {{ user.address }} </span>
      </li>

      <li @click="goToProfile">My profile</li>

      <li>Balance settings</li>

      <li @click="$emit('exit')" class="profile__list-out">Log out</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { user } from '@/data/profile.js'
import UIHeaderUser from '@/components/UI/UIHeaderUser.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToProfile() {
  active.value = false
  router.push('/account')
}

const active = ref(false)
const profile = ref(null)

function toggle() {
  active.value = !active.value
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (profile.value) {
      if (!profile.value.contains(e.target)) {
        active.value = false
      }
    }
  })
})
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.profile {
  position: relative;

  &__list {
    position: absolute;
    top: 0;
    right: -350px;
    width: 279px;
    height: 172px;
    z-index: -1;
    border-radius: 12px;
    box-shadow: 0 25px 40px 0 $boxShadow;
    background: $midnight;
    transition: right 300ms ease 0s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px 20px 12px 12px;

    @include media-breakpoint-down(xs) {
      width: 60vw;
    }

    li {
      font-size: 14px;
      font-weight: 600;
      margin-top: 8px;
      cursor: pointer;
      user-select: none;
    }

    &_active {
      right: -24px;
    }

    &-address {
      opacity: 0.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &-out {
      color: $red;
    }
  }
}
</style>
