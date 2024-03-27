<template>
  <picture>
    <source :srcset="`/taste_nft/public/images/${srcset}`" type="image/webp" />
    <img :src="`/taste_nft/public/images/${src}`" :alt="alt ? alt : 'img'" />
  </picture>
</template>

<script setup>
defineProps(['srcset', 'src', 'alt', 'id'])

// Артём, ты путь захардкодил? Компонент не универсальный, переделувай!!!!
</script>
