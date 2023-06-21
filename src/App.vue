<template>
  <label class="text-xl">Hello World!</label>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import '@/index.css';
@import '@/styles/screen.css';
@import '@/styles/frame.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  label {
    @apply flex-fixed;
  }
}
</style>
