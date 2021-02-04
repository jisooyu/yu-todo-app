
const todosReducer = (state, action) => {
    switch ( action.type ) {
        case  'POPULATE_TODOS':
            return action.todos
        case 'ADD_TODOS':
            return [
                ...state, 
            {
                title: action.title,
                body:action.body
            }]
        case 'REMOVE_TODO':
            return state.filter((todo)=>action.title !== todo.title)
        default:
            return state
    }   
}

export {todosReducer as default}