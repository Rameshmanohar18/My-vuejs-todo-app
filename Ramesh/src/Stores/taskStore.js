import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),
  getters: {
    pendingCount: (state) => state.tasks.length,
  },
});
