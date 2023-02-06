<template>
  <div>
    <a
      href="javascript:;"
      @click="setFilter('all')"
      :class="{ active: todoListStore.filter === 'all' }"
      >All</a
    >
    <a
      href="javascript:;"
      @click="setFilter('finished')"
      :class="{ active: todoListStore.filter === 'finished' }"
      >Finished</a
    >
    <a
      href="javascript:;"
      @click="setFilter('unfinished')"
      :class="{ active: todoListStore.filter === 'unfinished' }"
      >UnFinished</a
    >
  </div>
</template>
<script setup>
import { useTodoListStore } from "@/store";
const todoListStore = useTodoListStore();
const setFilter = (filter) => {
  todoListStore.$patch({ filter });
};
</script>
<style scoped>
div {
  text-align: center;
}
.active {
  text-decoration: none;
  color: #000;
}
a {
  margin-right: 20px;
}
</style>