import React, {useEffect, useReducer } from 'react'
import AddTodoForm from './AddTodoForm'
import todosReducer from '../reducers/todos'
import TodosContext from '../context/todos-context'
import TodoList from './TodoList'


const TodoApp = () => {

  const [todos, dispatch] = useReducer( todosReducer, [] )
  
  useEffect( () => {
    const todos = JSON.parse( localStorage.getItem( 'todos' ) )
    if ( todos ) {
      dispatch({type: 'POPULATE_TODOS',todos}
    )
  }
  }, [] )

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <header className="header" >
        <div className="header__content" >
          <div className="content-container">
            <div className="header__title">
              <h1>To-Do List App</h1>
            </div>
          </div>
        </div>
       </header>
        <div className="content-container">
          <TodosContext.Provider value={ { todos, dispatch }}>
            <TodoList />
            <AddTodoForm />
          </TodosContext.Provider>
        </div>
    </>
  )
}

export {TodoApp as default}

