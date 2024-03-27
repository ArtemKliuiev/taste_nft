<template>
  <input
    type="text"
    placeholder="Search for ..."
    :id="id ? id : ''"
    @input="(event) => $emit('inputValur', { message: event.target.value })"
  />
</template>

<script setup>
defineProps(['id'])
</script>
