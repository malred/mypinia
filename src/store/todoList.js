import { defineStore } from '@/pinia'

export default defineStore('todoList', {
    state: () => ({
        todos: [], // id: number text: string isFinished: boolean
        filter: 'all', // finished unfinished
        nextId: 0
    }),
    actions: {
        // 添加todo
        addTodo(text) {
            this.todos.push({
                id: this.nextId++,
                text,
                isFinished: false
            })
        },
        // 转换todo状态
        toggleTodo(id) {
            this.todos = this.todos.map(todo => {
                console.log(this.todos)
                // 找到要修改的todo
                if (todo.id === id) {
                    // 转换状态    
                    todo.isFinished = !todo.isFinished
                    console.log(todo)
                }
                return todo
            })
        },
        removeTodo(id) {
            // 过滤id对应的元素
            this.todos = this.todos.filter(todo => todo.id !== id)
        }
    },
    getters: {
        // state=>获取这里的state返回的数据
        // 获取所有已完成的
        finishedTodos(state) {
            return state.todos.filter(todo => todo.isFinished)
        },
        // 获取所有未完成的
        undefinedTodos(state) {
            return state.todos.filter(todo => !todo.isFinished)
        },
        // 获取不同状态的todos
        filterTodos(state) {
            switch (this.filter) {
                case 'finished':
                    return this.finishedTodos
                case 'unfinished':
                    return this.undefinedTodos
                default:
                    return this.todos
            }
        }
    }
})