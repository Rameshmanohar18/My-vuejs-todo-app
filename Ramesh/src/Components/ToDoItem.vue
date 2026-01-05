<script setup>
defineProps(["todo"]);
defineEmits(["remove"]);
</script>

<template>
  <div
    style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px"
  >
    <input type="checkbox" v-model="todo.completed" />

    <span
      :style="{
        flex: 1,
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.5 : 1,
      }"
    >
      {{ todo.text }}
    </span>

    <button @click="$emit('remove', todo.id)">❌</button>
  </div>
</template>
