<script setup>
import TodoItem from "./ToDoItem.vue";

defineProps(["todos"]);
const emit = defineEmits(["delete", "toggle", "edit"]);
</script>

<template>
  <div>
    <TodoItem
      v-for="t in todos"
      :key="t.id"
      :todo="t"
      @delete="emit('delete', $event)"
      @toggle="emit('toggle', $event)"
      @edit="emit('edit', $event.id, $event.text)"
    />
  </div>
</template>
