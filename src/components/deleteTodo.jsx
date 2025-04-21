
export const DeleteTodo = ({id, todoArray, setTodoArray}) => {

  const handleDelete = (id) => {
    const alertValue = confirm("Do you want to Delete this Todo");
    if(alertValue) {
      const updateTodoArray = todoArray.filter((todoElem) => todoElem.id !== id );
      setTodoArray(updateTodoArray);
    }
  }

  return (
    <div>
      <button onClick={(e) => {handleDelete(id);}}>Delete</button>
    </div>
  )
}