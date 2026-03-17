<!-- <script setup>
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
</template> -->

<!-- <script setup>
import { ref } from "vue";

const props = defineProps(["todo"]);
const emit = defineEmits(["delete", "toggle", "edit"]);

const editing = ref(false);
const newText = ref(props.todo.text);

const save = () => {
  emit("edit", { id: props.todo.id, text: newText.value });
  editing.value = false;
};
</script>

<template>
  <div :style="{ border: '1px solid gray', margin: '5px', padding: '5px' }">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="emit('toggle', todo.id)"
    />

    <span
      v-if="!editing"
      :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }"
    >
      {{ todo.text }}
    </span>

    <input v-if="editing" v-model="newText" />

    <span> | {{ todo.priority }} | {{ todo.due }}</span>

    <button @click="editing = true">Edit</button>
    <button v-if="editing" @click="save">Save</button>
    <button @click="emit('delete', todo.id)">Delete</button>
  </div>
</template> -->

<script setup>
defineProps(["todo"]);
defineEmits(["remove"]);
</script>

<template>
  <div
    class="flex justify-between items-center bg-white/10 p-4 rounded-2xl mb-3 hover:bg-white/20 transition"
  >
    <div class="flex items-center gap-3">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="emit('toggle', todo.id)"
      />

      <span :class="todo.completed ? 'line-through text-gray-400' : ''">
        {{ todo.text }}
      </span>

      <span class="text-xs px-2 py-1 bg-indigo-500 rounded-lg">
        {{ todo.priority }}
      </span>
    </div>

    <div class="flex gap-2">
      <button @click="editing = true" class="text-blue-400">Edit</button>
      <button @click="emit('delete', todo.id)" class="text-red-400">
        Delete
      </button>
    </div>
  </div>
</template>
