<script setup>
import { ref } from "vue";
const text = ref("");
const emit = defineEmits(["add"]);

const submit = () => {
  if (!text.value.trim()) return;
  emit("add", text.value);
  text.value = "";
};
</script>

<template>
  <div style="display: flex; gap: 8px; margin-bottom: 16px">
    <input
      v-model="text"
      placeholder="Add a new task..."
      @keyup.enter="submit"
      style="flex: 1; padding: 10px; border-radius: 8px; border: 1px solid #ddd"
    />
    <button @click="submit">Add</button>
  </div>
</template>
