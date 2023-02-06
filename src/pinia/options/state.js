import { reactive, toRef } from "vue"
export function createState(store, state) {
    const _state = state() // 指向state(一个函数),获取其返回值
    store.$state = reactive(_state) // state转响应式,操作时就是操作他 
    for (let key in _state) {
        // key in (todos,filter,nextId)
        // 创建一个 ref 对象，其 value 值指向另一个对象中的某个属性
        // store.key.value == store.$state.key ($state.todos)
        store[key] = toRef(store.$state, key)
    }
}