import React, { useState, useContext } from 'react'
import TodosContext from '../context/todos-context'

const AddTodoForm = () => {
    const {dispatch} = useContext(TodosContext)
    const [title, setTitle] = useState( "" )
    const [body, setBody] = useState( "" )
    
    const addNote = ( e ) => {
        e.preventDefault()
        dispatch( {
            type: 'ADD_TODOS',
            title,
            body
        } )
        setTitle( "" )
        setBody("")
    }
    return (
        <div className="list-header" >
            <form className="form" onSubmit={ addNote }>
                <label>Title</label>
                <input
                    className="text-input"
                    type="text"
                    value={title}
                    onChange={ ( e ) => {
                    setTitle(e.target.value)
                    } } />
                <label>To-Do</label>
                <textarea
                    className="textarea"
                    type="text"
                    value={body}
                    onChange={ ( e ) => {
                    setBody(e.target.value)
                }}></textarea>
                <button className="button" >Submit</button>
            </form>
        </div>
    )
}

export {AddTodoForm as default}