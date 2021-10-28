import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./styles.css"
import { Atodo } from "./components/Atodo";
import { AddTodo } from "./components/AddTodo";
import { addTodo, removeTodo } from "./redux/actions";
import { Dispatch } from "redux";



const App: React.FC = () => {
  const todoList: readonly Todo[] = useSelector(
    (state: TodoState) => state.todoList,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveTodo = React.useCallback(
    (article: Todo) => dispatch(addTodo(article)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Todo list</h1>
      <AddTodo saveTodo={saveTodo} />
      {todoList.map((atodo: Todo) => (
        <Atodo
          key={atodo.id}
          atodo={atodo}
          removeTodo={removeTodo}
        />
      ))}
    </main>
  )
}

export default App;
