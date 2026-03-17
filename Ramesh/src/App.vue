<!-- <script setup>
import { ref, watch, computed } from "vue";
import TodoForm from "./Components/ToDoForm.vue";
import TodoList from "./Components/ToDoList.vue";

const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);
const filter = ref("all");
const search = ref("");
const dark = ref(false);

watch(
  todos,
  () => {
    localStorage.setItem("todos", JSON.stringify(todos.value));
  },
  { deep: true },
);

const addTodo = (todo) => {
  todos.value.push({
    id: Date.now(),
    text: todo.text,
    priority: todo.priority,
    due: todo.due,
    completed: false,
  });
};

const deleteTodo = (id) => {
  if (confirm("Delete task?")) {
    todos.value = todos.value.filter((t) => t.id !== id);
  }
};

// const toggleTodo = (id) => {
//   const t = todos.value.find((t) => t.id === id);
//   t.completed = !t.completed;
// };

const toggleTodo = (id) => {
  const t = todos.value.find((t) => t.id === id);
  if (t) t.completed = !t.completed;
};

const editTodo = (id, text) => {
  const t = todos.value.find((t) => t.id === id);
  if (t) t.text = text;
};

// const editTodo = (id, text) => {
//   const t = todos.value.find((t) => t.id === id);
//   t.text = text;
// };

const filteredTodos = computed(() => {
  return todos.value
    .filter((t) =>
      filter.value === "all"
        ? true
        : filter.value === "done"
          ? t.completed
          : !t.completed,
    )
    .filter((t) => t.text.toLowerCase().includes(search.value.toLowerCase()));
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center p-6"
  >
    <div
      class="w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white"
    >
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold tracking-wide">✨ Premium Todo</h1>
        <button
          class="px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition"
          @click="dark = !dark"
        >
          🌙 Theme
        </button>
      </div>

      <input
        v-model="search"
        placeholder="Search tasks..."
        class="w-full p-3 rounded-xl bg-white/20 placeholder-gray-300 outline-none mb-4"
      />

      <select
        v-model="filter"
        class="w-full p-3 rounded-xl bg-white/20 outline-none mb-4"
      >
        <option value="all">All Tasks</option>
        <option value="done">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <TodoForm @add="addTodo" />
      <TodoList
        :todos="filteredTodos"
        @delete="deleteTodo"
        @toggle="toggleTodo"
        @edit="editTodo"
      />
    </div>
  </div>
</template> -->
<script setup>
import { ref, watch, computed } from "vue";
import TodoForm from "./Components/ToDoForm.vue";
import TodoList from "./Components/ToDoList.vue";

const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);
const search = ref("");
const filter = ref("all");

watch(
  todos,
  () => {
    localStorage.setItem("todos", JSON.stringify(todos.value));
  },
  { deep: true },
);

const addTodo = (todo) => {
  todos.value.push({
    id: Date.now(),
    text: todo.text,
    priority: todo.priority,
    due: todo.due,
    completed: false,
  });
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter((t) => t.id !== id);
};

const toggleTodo = (id) => {
  const t = todos.value.find((t) => t.id === id);
  if (t) t.completed = !t.completed;
};

const editTodo = (id, text) => {
  const t = todos.value.find((t) => t.id === id);
  if (t) t.text = text;
};

const filteredTodos = computed(() => {
  return todos.value
    .filter((t) =>
      filter.value === "all"
        ? true
        : filter.value === "done"
          ? t.completed
          : !t.completed,
    )
    .filter((t) => t.text.toLowerCase().includes(search.value.toLowerCase()));
});

const completedCount = computed(
  () => todos.value.filter((t) => t.completed).length,
);
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- HEADER -->
    <div class="bg-white shadow px-8 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-800">🛒 Todo Manager</h1>

      <input
        v-model="search"
        placeholder="Search tasks..."
        class="border px-4 py-2 rounded-lg w-80"
      />
    </div>

    <!-- CONTENT -->
    <div class="max-w-5xl mx-auto mt-8">
      <!-- STATS -->
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-gray-500">Total Tasks</p>
          <h2 class="text-2xl font-bold">{{ todos.length }}</h2>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-gray-500">Completed</p>
          <h2 class="text-2xl font-bold text-green-600">
            {{ completedCount }}
          </h2>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-gray-500">Pending</p>
          <h2 class="text-2xl font-bold text-red-600">
            {{ todos.length - completedCount }}
          </h2>
        </div>
      </div>

      <!-- ADD TODO -->
      <div class="bg-white p-6 rounded-xl shadow mb-6">
        <TodoForm @add="addTodo" />
      </div>

      <!-- FILTER -->
      <div class="mb-4">
        <select v-model="filter" class="border px-4 py-2 rounded-lg">
          <option value="all">All</option>
          <option value="done">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <!-- TABLE -->
      <div class="bg-white p-6 rounded-xl shadow">
        <TodoList
          :todos="filteredTodos"
          @delete="deleteTodo"
          @toggle="toggleTodo"
          @edit="editTodo"
        />
      </div>
    </div>
  </div>
</template>
