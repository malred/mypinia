import { computed } from "vue" 
/*
        getters: {
            // state=>获取这里的state 
            finishedTodos(state) {
                return state.todos.filter(todo => todo.isFinished)
            },
        }
        ...
*/
export function createGetters(store, getters) {
    for (let getter in getters) {
        // bind,把getter方法的this指向store.$state,并传一个参数
        store[getter] = computed(getters[getter].bind(store.$state, store.$state))
        store.$state[getter] = store[getter] // state.xxx
    }
}