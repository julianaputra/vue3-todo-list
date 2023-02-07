<template>
  <h1>Todo App</h1>
  <TodoForm />
  <TodoList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

export default defineComponent({
  components: { TodoForm, TodoList },
});
</script>
