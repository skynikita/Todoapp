import React, {useState} from "react";

type Props = {
  saveTodo: (atodo: Todo | any) =>void
}

export const AddTodo:React.FC<Props> = ({saveTodo}) => {
  const [atodo, setATodo] = useState<Todo | {}>()

  const handleTodo = (e:React.FormEvent<HTMLInputElement>) =>{
    setATodo(
      {
        ...atodo,
        [e.currentTarget.id]: e.currentTarget.value
      })
  }

  const addNewTodo = (e: React.FormEvent)=>{
    e.preventDefault()
    saveTodo(atodo)
  }
  return (
    <form onSubmit={addNewTodo} className="Add-todo">
      <input
        type="text"
        id="title"
        placeholder="title"
        onChange={handleTodo}
      />
        <input
          type="text"
          id="body"
          placeholder="what to do"
          onChange={handleTodo}
        />
      <button disabled={atodo === undefined ? true : false}>
        Add new todo
      </button>
    </form>
  )
}
