<template>
  <div>
    <div v-for="item of todoListStore.filterTodos" :key="item.id">
      <input
        type="checkbox"
        :checked="item.isFinished"
        @click="todoListStore.toggleTodo(item.id)"
      />
      <span :class="{ finished: item.isFinished }">{{ item.text }}</span>
      <button @click="todoListStore.removeTodo(item.id)">delete</button>
    </div>
  </div>
</template>
<script setup>
import { useTodoListStore } from "@/store";
const todoListStore = useTodoListStore();
</script>
<style scoped>
div {
  text-align: center;
}
.finished {
  text-decoration: line-through;
}
</style>