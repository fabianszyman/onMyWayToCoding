import React, {useState, useEffect} from 'react';
import './App.css';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState(""); 
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  // USE EFFECT 
  useEffect(() => {
    filterHandler();
  }, [todos,status])

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredToDos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredToDos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
  <h1>Fabian's To Do List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setToDos={setToDos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <TodoList setToDos={setToDos} todos={todos} filteredToDos={filteredToDos} />
    </div>
  );
}

export default App;
