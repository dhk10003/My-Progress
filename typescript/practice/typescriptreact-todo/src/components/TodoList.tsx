import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, setTodos, getTodos, deleteTodo }) => {
  return (
    <>
      {todos.map((item: TodoType) => (
        <TodoListItem key={item.id} item={item} toggleTodo={toggleTodo} setTodos={setTodos} getTodos={getTodos} deleteTodo={deleteTodo} />
      ))}
    </>

  )
}

export default TodoList
