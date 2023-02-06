/*
    actions: {
        // 添加todo
        addTodo(text) {
            this.todos.push({
                id: this.nextId++,
                text,
                isFinished: false
            })
        },
        ...
    }
*/
export function createActions(store,actions) { 
    for (let method in actions) {
        store[method] = actions[method]
    }
}