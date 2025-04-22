
export const EditTodo = ({id, element, editTodo, setEditTodo, editTodoContent, setEditTodoContent, todoArray, setTodoArray, getDateFunction}) => {
  //function to set which element is currently beign edited and set its value in input
  const handleEdit = (id) => {
    setEditTodo(id);
    setEditTodoContent(element.content);
  }
  //function to save and update the todoArray
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