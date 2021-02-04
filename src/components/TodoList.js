import React, { useContext } from 'react'
import TodosContext from '../context/todos-context'
import Todo from './Todo'

const TodoList = () => {
    const {todos} = useContext(TodosContext)
    return (
        todos.map( ( todo ) => (<Todo key={todo.title} todo={todo}  />
        ))
    )
}

export { TodoList as default }