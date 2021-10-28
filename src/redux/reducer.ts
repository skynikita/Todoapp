import * as actionTypes from "./actionTypes"

const initialState: TodoState ={
  todoList : [
    {
      id: 1,
      title: "To do 1",
      body:
        "Go to wws",
    },
    {
      id: 2,
      title: "To do 2",
      body:
        "Housework ",
    },
  ]
}

const reducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type){
    case actionTypes.ADD_TODO:
      const newTodo: Todo = {
        id: Math.random(), // not really unique
        title: action.Atodo.title,
        body: action.Atodo.body
      }
      return {
        ...state,
        todoList: state.todoList.concat(newTodo)
      }
    case actionTypes.REMOVE_TODO:
      const updatedTodoList: Todo[] = state.todoList.filter(t => t.id !== action.Atodo.id)
      return{
        ...state,
        todoList:updatedTodoList
      }
  }
  return state
}

export default reducer;
