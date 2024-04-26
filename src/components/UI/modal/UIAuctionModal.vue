<template>
  <UIModal block="true">
    <template #modal-name>Place a bid</template>

    <template #modal-main>
      <div class="place-bet">
        <h4 class="place-bet__title">Min.sum</h4>

        <div class="place-bet__main">
          <Form class="place-bet__input">
            <Field name="field" :rules="isRequired" />
            <ErrorMessage name="field" />
          </Form>

          <div class="place-bet__sum">({{ sum }}$)</div>
        </div>

        <div class="place-bet__btn">
          <UIButton @click="place" :state="state">Place</UIButton>
        </div>
      </div>
    </template>
  </UIModal>
</template>

<script setup>
import UIModal from '@/components/UI/UIModal.vue'
import UIButton from '@/components/UI/UIButton.vue'
import { ref, watch } from 'vue'

import { Field, Form, ErrorMessage } from 'vee-validate'

function isRequired(value) {
  if (value && value.trim()) {
    return true
  }
  return 'This is required'
}

const emit = defineEmits(['place'])

const input = ref('')
const sum = ref(0)
const onlyNum = ref(false)
const state = ref('disabled')

watch(input, () => {
  console.log(input.value.length > 0)
  if (input.value.length > 0 && onlyNum.value) {
    state.value = 'active'
    changeSum(input.value)
  } else {
    state.value = 'disabled'
  }
})

function changeSum(value) {
  sum.value = (value / 101).toFixed(2)
}

function place() {
  if (state.value === 'active') {
    emit('place')
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base/base';

.place-bet {
  display: block;
  width: 595px;

  @include media-breakpoint-down(sm) {
    width: 75vw;
  }

  &__title {
    color: $whiteOpacity;
    font-weight: 600;
    margin: 18px 0 4px 0;
  }

  &__main {
    display: flex;
    align-items: center;
    margin-bottom: 31px;

    @include media-breakpoint-down(xs) {
      display: block;
      margin-bottom: 20px;
    }
  }

  &__input {
    margin-right: 10px;
    position: relative;
    @include media-breakpoint-down(xs) {
      margin-bottom: 20px;
    }

    input {
      border-radius: 8px;
      background: $charcoal;
      width: 176px;
      height: 40px;
      border: none;
      color: $white;
      font-weight: 600;
      line-height: 19px;
      padding: 0 70px 0 16px;

      @include media-breakpoint-down(xs) {
        width: 100%;
      }

      &:focus {
        border: none;
        outline: none;
      }
    }

    &:before {
      content: 'TASTE';
      position: absolute;
      right: 13px;
      top: 10px;
    }
  }

  &__sum {
    @include media-breakpoint-down(xs) {
      text-align: center;
    }
  }

  &__btn {
    width: 157px;
    height: 40px;
    margin: 0 auto;
  }
}
</style>
