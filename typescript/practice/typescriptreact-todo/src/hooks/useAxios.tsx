import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface AxiosHook {
    getTodos: () => Promise<TodoType[]>;
    addTodo: AddFn;
    toggleTodo: ToggleFn;
    deleteTodo: DeleteFn;
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  }

const useAxios = ():AxiosHook => {

    const [todos, setTodos] = useState<TodoType[]>([])

    useEffect(()=>{
        console.log("todos from useAxios: ", todos)
    }, [todos])

    const getTodos = async()=>{
        const {data} = await axios.get<TodoType[]>('https://64ecd95df9b2b70f2bfb08f4.mockapi.io/todos')
        setTodos(data)
        // console.log(todos)
        return data
    }

    const addTodo:AddFn = async (text) =>{
        const newTodo = {
            task: text,
            isDone: false
        }

        const {data} = await axios.post<TodoType>('https://64ecd95df9b2b70f2bfb08f4.mockapi.io/todos', newTodo)
        if(data){
            getTodos()
        }
    }

    const toggleTodo:ToggleFn = async (item) =>{
        const updateTodo = {
            id: item.id,
            task: item.task,
            isDone: !item.isDone
        }
        console.log(updateTodo)
        const {data} = await axios.put<TodoType>(`https://64ecd95df9b2b70f2bfb08f4.mockapi.io/todos/${item.id}`,updateTodo)
        if (data){
            getTodos()
        }
    }

    const deleteTodo:DeleteFn = async (id) =>{
        try{
            const res = await axios.delete<TodoType>(`https://64ecd95df9b2b70f2bfb08f4.mockapi.io/todos/${id}`)
            console.log(res)
            getTodos()
        } catch (err){
            console.log(err)
        }

    }

    return {getTodos, addTodo, toggleTodo, deleteTodo, todos, setTodos}
}

export default useAxios