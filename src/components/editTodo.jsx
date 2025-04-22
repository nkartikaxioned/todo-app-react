
export const EditTodo = ({id, element, editTodo, setEditTodo, editTodoContent, setEditTodoContent, todoArray, setTodoArray, getDateFunction}) => {

  const handleEdit = (id) => {
    setEditTodo(id);
    setEditTodoContent(element.content);
  }

  const handleSaveCLick = (id) => {
    const editedTodoArray = todoArray.map((todoElem) => todoElem.id === id ? {...todoElem, content: editTodoContent, date: getDateFunction() } : todoElem);
    setTodoArray(editedTodoArray);
    setEditTodoContent("");
    setEditTodo("");
  }

  return (
    <div>
    {editTodo === id ? (
      <button onClick={(e) => {handleSaveCLick(id)}}>Save</button>
      ) : ( 
      <button onClick={(e) => {handleEdit(id);}}>Edit</button>
    )}
    </div>
  );
}