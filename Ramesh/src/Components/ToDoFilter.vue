<script setup>
const model = defineModel();
</script>

<template>
  <div style="display: flex; gap: 8px; margin-bottom: 16px">
    <button @click="model = 'all'">All</button>
    <button @click="model = 'active'">Active</button>
    <button @click="model = 'completed'">Done</button>
  </div>
</template>
