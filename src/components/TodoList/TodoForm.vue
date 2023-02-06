<template>
  <div>
    <input
      type="text"
      placeholder="Please input something..."
      v-model="inputRef"
    />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/store";
const inputRef = ref(""); // 绑定input框
const todoListStore = useTodoListStore();
const addTodo = () => {
  if (inputRef.value === "" || inputRef.value.length <= 0) {
    return;
  }
  todoListStore.addTodo(inputRef.value); // 添加todo到全局状态
  inputRef.value = ""; // 清空内容
};
</script>
<style scoped>
div {
  margin-top: 20px;
  text-align: center;
}
</style>