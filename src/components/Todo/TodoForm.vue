<template>
  <form @submit.prevent="addItemAndClear">
    <input type="text" v-model="todo" /> <button>Add</button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useTodoListStore } from "@/stores/useTodoListStore";

export default defineComponent({
  setup() {
    const todo = ref("");

    const store = useTodoListStore();

    function addItemAndClear() {
      if (todo.value.length === 0) {
        return;
      }

      store.addTodo(todo.value);
      todo.value = "";
    }

    return { todo, addItemAndClear };
  },
});
</script>
