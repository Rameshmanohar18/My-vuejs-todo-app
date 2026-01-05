<script setup>
defineProps(["count"]);
</script>

<template>
  <header style="margin-bottom: 16px">
    <h1>📝 My Todo List</h1>
    <p>{{ count }} tasks pending</p>
  </header>
</template>
