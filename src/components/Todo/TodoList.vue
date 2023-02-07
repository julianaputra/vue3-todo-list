<template>
  <div v-for="todo in todoList" :key="todo.id">
    <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
    <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
    <span @click="deleteTodo(todo.id)">&#10060;</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useTodoListStore } from "@/stores/useTodoListStore";

export default defineComponent({
  setup() {
    const store = useTodoListStore();

    const { todoList } = storeToRefs(store);

    const { toggleCompleted, deleteTodo } = store;

    return { todoList, toggleCompleted, deleteTodo };
  },
});
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
