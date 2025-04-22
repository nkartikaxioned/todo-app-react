
export const CancelEdit = ({setEditTodoContent, setEditTodo}) => {

  const handleOnClickCancel = () => {
    setEditTodoContent("");
    setEditTodo("");
  }

  return (
    <button onClick={(e) => {handleOnClickCancel()}}>Cancel</button>
  )
}