interface Todo {
  id: number,
  title: string
  body: string
}

type TodoState = {
  todoList: Todo[]
}

type TodoAction ={
  type: string,
  Atodo: Todo
}

type DispatchType = (args: TodoAction) => TodoAction
