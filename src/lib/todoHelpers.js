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