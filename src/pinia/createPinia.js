import { reactive } from 'vue' // 接收一个普通对象然后返回该普通对象的响应式代理(嵌套的都会被代理)
import { patch } from './apis' 
export default () => {
    const piniaStore = reactive({})
    // 暴露操作piniaStore的方法
    function setSubStore(name, store) {
        if (!piniaStore[name]) {
            piniaStore[name] = store
            piniaStore[name].$patch = patch // 给子store添加patch方法
        }
        return piniaStore
    }
    function install(app) {
        // 创建pinia实例
        // 暴露piniaStore
        // app.provide('piniaStore',piniaStore)        
        app.provide('setSubStore', setSubStore) 
    }
    return {
        install
    }
}

/**
 * 可以被vue实例.use的,包含这种结构
 * 
 * {
 *  install (app) {}
 * }
 */