import * as actionTypes from "./actionTypes"

export function addTodo(Atodo: Todo){
  const action : TodoAction = {
    type: actionTypes.ADD_TODO,
    Atodo,
  }
  return simulateHttpRequest(action)
}

export function removeTodo(Atodo: Todo){
  const action: TodoAction = {
    type: actionTypes.REMOVE_TODO,
    Atodo
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: TodoAction){
  return(dispatch: DispatchType) => {
    setTimeout(()=>{
      dispatch(action)
    },500)
  }
}
