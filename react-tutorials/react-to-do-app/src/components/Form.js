import React from 'react';

const Form = ({setInputText, inputText, todos, setToDos, setStatus}) => {
    // Here I can write javascript code and function
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000} 
        ]);
        setInputText("");
    };
    const statusHandler = (e) =>{
        setStatus(e.target.value)
    } 

    return(
        <form>
            <input 
            value={inputText}
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" 
            />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="uncompleted">Uncompleted</option>
                <option value="completed">Completed</option>
                <option value="all">All</option>
                </select>
            </div>
        </form>
    );
}

export default Form;