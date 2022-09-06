import React, {useState} from 'react';
import './App.css';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState(""); 
  const [todos, setToDos] = useState([]);
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
      />
      <TodoList />
    </div>
  );
}

export default App;
