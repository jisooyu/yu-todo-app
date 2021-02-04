import React, { useContext } from 'react'
import TodosContext from '../context/todos-context'

const Todo = ( { todo } ) => {
    const { dispatch } = useContext( TodosContext )

    return (
        <div className="list-item">
            <h3>{ todo.title }</h3>
            <p>{ todo.body }</p>
            <button className="button" onClick={ () => dispatch( {
                type: 'REMOVE_TODO',
                title: todo.title
            })}>X</button>
        </div>
    )
}

export {Todo as default}