interface TodoType{
    // union: string | number
    id: string|number;
    task: string;
    isDone: boolean;
}

interface ITodoList{
    todos: TodoType[];
    toggleTodo: ToggleFn;
    getTodos: () => Promise<TodoType[]>;
    setTodos: (todos: TodoType[]) => Dispatch<SetStateAction<TodoType[]>>;
    deleteTodo: DeleteFn;
}

type ToggleFn = (item:TodoType)=> void;

type DeleteFn = (id: string | number) => void;

interface IListItem {
    key : string | number;
    item:TodoType;   
    toggleTodo: ToggleFn;
    getTodos: () => Promise<TodoType[]>;
    setTodos: (todos: TodoType[]) => Dispatch<SetStateAction<TodoType[]>>;
    deleteTodo: DeleteFn;
  }

  type AddFn = (text:string) => void;