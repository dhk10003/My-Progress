import React, {useState} from 'react'

interface IInputForm{
  addTodo: AddFn;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  getTodos: () => Promise<TodoType[]>;
}

const InputForm:React.FC<IInputForm> = ({addTodo, setTodos, getTodos}) => {

  const [task, setTask] = useState("")

  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault()
    await addTodo(task)
    const data:TodoType[] = await getTodos()
    console.log(data)
    setTodos(data)
    setTask("")
  }
  
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />
      <button
        className="btn-hover btn-color"
        type="submit"
      >
        Add New Todo
      </button>
    </form>
  )
}

export default InputForm