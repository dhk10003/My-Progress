import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';
import useAxios from '../hooks/useAxios';
import { get } from 'http';

const Home = () => {

  const {getTodos, addTodo, toggleTodo, deleteTodo, todos, setTodos} = useAxios()

  useEffect(()=>{
    const fetchData = async () => {
      const data:TodoType[] = await getTodos()
      setTodos(data)
    }
    fetchData()
  }, [])
  
  return (
    <div className='main'>
      <InputForm addTodo={addTodo} setTodos={setTodos} getTodos={getTodos} />
      <TodoList todos={todos} toggleTodo={toggleTodo} getTodos={getTodos} setTodos={setTodos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Home