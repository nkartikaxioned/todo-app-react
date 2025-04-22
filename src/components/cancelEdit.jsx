
export const CancelEdit = ({setEditTodoContent, setEditTodo}) => {
  //function to cancel editing and empty values
  const handleOnClickCancel = () => {
    setEditTodoContent("");
    setEditTodo("");
  }

  return (
    <button onClick={(e) => {handleOnClickCancel()}}>Cancel</button>
  )
}