import { inject, reactive, toRef, computed } from "vue"
import {
    createActions,
    createState,
    createGetters
} from './options'
// 定义store
export default (
    name,
    {
        state, // function
        getters,
        actions
    }
) => {
    const store = {}
    // 创建和挂载state
    state && typeof state === 'function' && createState(store, state)
    // 创建和挂载actions
    actions && Object.keys(actions).length > 0 && createActions(store, actions)
    // 创建和挂载getters
    getters && Object.keys(getters).length > 0 && createGetters(store, getters)
    return () => {
        // 获取暴露的setSubStore方法
        const setSubStore = inject('setSubStore')
        const piniaStore = setSubStore(name, reactive(store))
        return piniaStore[name]
    }
}