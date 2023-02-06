// 添加store内属性的方法
export function patch(value) {
    const store = this // 指向的是子store
    for (let key in value) {
        store[key] = value[key]
    }
}