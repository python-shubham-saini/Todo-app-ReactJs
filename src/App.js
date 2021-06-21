import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';
import { AddTodo } from "./Components/AddTodo";
import { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];      
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  
  const [todos, setTodos] = useState(initTodo);

  const doneTodos = (todo) =>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.removeItem("todos", JSON.stringify(todos))
    
  };

  const addTodo = (title, desc) =>{
    const id = todos.length+1
    const myTodo = {
      id:id,
      title,
      desc
    }
    if (title || desc) {
      setTodos([...todos, myTodo]);
    }
    
  }
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos]);
  return (
  <>
    <Header/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} doneTodos={doneTodos}/>
    <Footer/>
  </>
  );
}

export default App;
