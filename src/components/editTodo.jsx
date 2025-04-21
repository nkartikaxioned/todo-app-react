
export const EditTodo = ({id, editTodo, setEditTodo}) => {

  const handleEdit = (id) => {
    setEditTodo(id);
  }

  return (
    <div>
      <button onClick={(e) => {handleEdit(id);}}>Edit</button>
    </div>
  )
}