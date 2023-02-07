import { defineStore } from "pinia";

interface ToDoItem {
  item: string;
  id: number;
  completed: boolean;
}

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as ToDoItem[],
    id: 0,
  }),
  actions: {
    addTodo(item: string) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    toggleCompleted(idToFind: number) {
      const todo = this.todoList.find((todo) => todo.id === idToFind);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(itemId: number) {
      this.todoList = this.todoList.filter((todo) => {
        return todo.id !== itemId;
      });
    },
  },
});
