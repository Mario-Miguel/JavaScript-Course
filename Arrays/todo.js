const todo = [{
    text: 'Walk the dog',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'End js course',
    completed: false
}]

// console.log(`Todo: ${todo[0]}, ${todo[1]}`)

// todo.forEach((note, index) => {
//     const num = index +1
//     console.log(`${num}. ${note}`)
// })

console.log(todo)

const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(todo => {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1)
        todos.splice(index,1)
}

const getThingsToDo = function(todos) {
    return todos.filter(todo => {
        return !todo.completed
    })
}

const sortTodo = function(todos){
    todos.sort(function(a, b){
        if(a.completed && !b.completed){
            return 1
        }
        else if (!a.completed && b.completed){
            return -1
        }
        else
            return 0
    })
}

sortTodo(todo)
console.log(todo)

// deleteTodo(todo, 'Clean kitchen')
// console.log(todo)
// console.log(getThingsToDo(todo))