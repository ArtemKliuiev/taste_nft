<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
const props = defineProps(['modelValue', 'placeholder'])
const emit = defineEmits(['update:modelValue'])
</script>
