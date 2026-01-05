<!-- <script setup>
import Header from "./Components/Header.vue";
import { useTaskStore } from "./Stores/taskStore";
import { onMounted } from "vue";
const taskStore = useTaskStore();
onMounted(() => {
  console.log("Pending Tasks:", taskStore.pendingCount);
});

import "./Assets/style.css";
import "./Assets/layout.css";
import "./Assets/typography.css";
import ToDoFilter from "./Components/ToDoFilter.vue";
import ToDoList from "./Components/ToDoList.vue";
import ToDoInput from "./Components/ToDoInput.vue";
import ToDoItem from "./Components/ToDoItem.vue";
import AddTask from "./Components/AddTask.vue";
</script>

<template>
  <h1>You did it! Welcome to Vuejs in 2026 January Ramesh</h1>
 
  <Header :pendingTasks="10" />
</template>

<style scoped></style> -->

<script setup>
import { ref, computed, watch } from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";
import TodoFilter from "./components/TodoFilter.vue";

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
  { deep: true }
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
</style>
