<template>
  <div class="only-num-input">
    <input
      type="text"
      :placeholder="placeholder"
      :value="props.modelValue"
      @input="$emit($event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps(['modelValue', 'placeholder'])
</script>
