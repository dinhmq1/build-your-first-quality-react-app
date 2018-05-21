export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*1000)
// setup arg as 'id' and refer to it as list. As for the implementation
// we can refer to list.find using the build in array method. Then we 
// compare a set of predicate where it's going to receive the item
// from the list and we're going to compare item.id and make sure it equals
// the passed in id
export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id)
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex + 1)
    ]
}
export const removeTodo = (list, id) => {
    const removeIndex = list.findIndex(item => item.id === id)
    return [
      ...list.slice(0, removeIndex),
      ...list.slice(removeIndex+1)
    ]  
}
export const filterTodos = (list, route) => {
    switch(route){
        case '/active':
            return list.filter(item => !item.isComplete)
        case '/complete':
            return list.filter(item => item.isComplete)
        default:
            return list
    }
}