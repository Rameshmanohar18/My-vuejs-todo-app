<script setup>
import { ref } from "vue";
import { Pencil, Trash2, Check, Circle } from "lucide-vue-next";

const props = defineProps(["todos"]);
const emit = defineEmits(["delete", "toggle", "edit"]);

const editingId = ref(null);
const editText = ref("");

const startEdit = (todo) => {
  editingId.value = todo.id;
  editText.value = todo.text;
};

const saveEdit = (id) => {
  emit("edit", id, editText.value);
  editingId.value = null;
};
</script>

<template>
  <table class="w-full">
    <thead>
      <tr class="border-b">
        <th class="p-3">Status</th>
        <th class="p-3">Task</th>
        <th class="p-3">Priority</th>
        <th class="p-3">Due</th>
        <th class="p-3 text-center">Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="todo in todos"
        :key="todo.id"
        class="border-b hover:bg-gray-50"
      >
        <!-- STATUS ICON -->
        <td class="p-3 cursor-pointer" @click="emit('toggle', todo.id)">
          <Check v-if="todo.completed" class="text-green-600" />
          <Circle v-else class="text-gray-400" />
        </td>

        <!-- TASK -->
        <td class="p-3">
          <span
            v-if="editingId !== todo.id"
            :class="todo.completed ? 'line-through text-gray-400' : ''"
          >
            {{ todo.text }}
          </span>

          <input v-else v-model="editText" class="border rounded px-2 py-1" />
        </td>

        <!-- PRIORITY -->
        <td class="p-3">
          <span
            class="px-2 py-1 rounded text-white"
            :class="{
              'bg-red-500': todo.priority === 'High',
              'bg-yellow-500': todo.priority === 'Medium',
              'bg-green-500': todo.priority === 'Low',
            }"
          >
            {{ todo.priority }}
          </span>
        </td>

        <!-- DATE -->
        <td class="p-3">{{ todo.due || "—-" }}</td>

        <!-- ACTION ICONS -->
        <td class="p-3 flex justify-center gap-4">
          <button v-if="editingId !== todo.id" @click="startEdit(todo)">
            <Pencil class="text-blue-600 hover:scale-110 transition" />
          </button>

          <button v-else @click="saveEdit(todo.id)">
            <Check class="text-green-600 hover:scale-110 transition" />
          </button>

          <button @click="emit('delete', todo.id)">
            <Trash2 class="text-red-600 hover:scale-110 transition" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
