<!-- <script setup>
import { ref, computed, watch } from "vue";
import TodoHeader from "./Components/ToDoHeader.vue";
import TodoInput from "./Components/ToDoInput.vue";
import TodoItem from "./Components/ToDoItem.vue";
import TodoFilter from "./Components/ToDoFilter.vue";

const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);

const filter = ref("all");

const filteredTodos = computed(() => {
  if (filter.value === "active") {
    return todos.value.filter((t) => !t.completed);
  }
  if (filter.value === "completed") {
    return todos.value.filter((t) => t.completed);
  }
  return todos.value;
});

watch(
  todos,
  () => {
    localStorage.setItem("todos", JSON.stringify(todos.value));
  },
  { deep: true },
);

const addTodo = (text) => {
  todos.value.unshift({
    id: Date.now(),
    text,
    completed: false,
  });
};

const removeTodo = (id) => {
  todos.value = todos.value.filter((t) => t.id !== id);
};
</script>

<template>
  <div class="app">
    <TodoHeader :count="todos.filter((t) => !t.completed).length" />
    <TodoInput @add="addTodo" />
    <TodoFilter v-model="filter" />

    <TodoItem
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @remove="removeTodo"
    />
  </div>
</template>

<style>
@import "./assets/style.css";
</style> -->

<!-- <script setup>
import { ref, watch, computed } from "vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

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
  if (confirm("Delete this task?")) {
    todos.value = todos.value.filter((t) => t.id !== id);
  }
};

const toggleTodo = (id) => {
  const t = todos.value.find((t) => t.id === id);
  t.completed = !t.completed;
};

const editTodo = (id, text) => {
  const t = todos.value.find((t) => t.id === id);
  t.text = text;
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
</script>

<template>
  <div :class="dark ? 'dark' : ''">
    <h1>🔥 Vue Todo App</h1>

    <button @click="dark = !dark">Toggle Dark</button>

    <input v-model="search" placeholder="Search..." />

    <select v-model="filter">
      <option value="all">All</option>
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
</template>

<style>
.dark {
  background: #222;
  color: white;
  min-height: 100vh;
}
</style> -->

<script setup>
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

const toggleTodo = (id) => {
  const t = todos.value.find((t) => t.id === id);
  t.completed = !t.completed;
};

const editTodo = (id, text) => {
  const t = todos.value.find((t) => t.id === id);
  t.text = text;
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
</template>
