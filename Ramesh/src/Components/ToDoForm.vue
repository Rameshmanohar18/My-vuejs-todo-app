<!-- <script setup>
import { ref } from "vue";

const emit = defineEmits(["add"]);

const text = ref("");
const priority = ref("Low");
const due = ref("");

const submit = () => {
  if (!text.value) return;
  emit("add", {
    text: text.value,  
    priority: priority.value,
    due: due.value,
  });
  text.value = "";
};
</script>

<template>
  <div>
    <input v-model="text" placeholder="New Task" />
    <select v-model="priority">
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>
    <input type="date" v-model="due" />
    <button @click="submit">Add</button>
  </div>
</template> -->
<script setup>
import { ref } from "vue";

const emit = defineEmits(["add"]);

const text = ref("");
const priority = ref("Medium");
const due = ref("");

const submit = () => {
  if (!text.value) return;

  emit("add", {
    text: text.value,
    priority: priority.value,
    due: due.value,
  });

  text.value = "";
  due.value = "";
};
</script>
<template>
  <div class="flex gap-2 mb-4">
    <input
      v-model="text"
      placeholder="New task"
      class="flex-1 p-3 rounded-xl bg-white/20 outline-none text-white"
    />

    <select v-model="priority" class="p-3 rounded-xl bg-white/20 text-white">
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>

    <input
      type="date"
      v-model="due"
      class="p-3 rounded-xl bg-white/20 text-white"
    />

    <button
      @click="submit"
      class="px-5 bg-indigo-500 hover:bg-indigo-600 rounded-xl transition"
    >
      Add
    </button>
  </div>
</template>
