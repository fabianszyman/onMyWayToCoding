import React from 'react';
// Import Components
import ToDo from './ToDo'

const TodoList = ({todos, setToDos }) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo =>(
                    <ToDo 
                    setToDos={setToDos} 
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
