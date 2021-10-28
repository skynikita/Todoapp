import React, {useCallback} from 'react';
import {Dispatch} from "react";
import {useDispatch} from "react-redux";

type Props = {
  atodo: Todo
  removeTodo: (atodo: Todo) => void
}

export const Atodo: React.FC<Props> =({atodo, removeTodo}) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteTodo = useCallback(
    (atodo: Todo) => dispatch(removeTodo(atodo)),
    [dispatch,removeTodo]
  )

  return(
    <div className="TodoCard">
      <div>
        <h1>{atodo.title}</h1>
        <p>{atodo.body}</p>
      </div>
      <button onClick={()=>deleteTodo(atodo)}>Delete</button>
    </div>
  )
}
