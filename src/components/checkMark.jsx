

export const CheckMark = ({element, todoArray, setTodoArray}) => {
  const {id,content, checked, date} = element;
  //function to handle toggle of checkbox
  const handleOnChange = (id) => {
    const updatedTodoArray = todoArray.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo);
    setTodoArray(updatedTodoArray);
  }

  return(
    <input type="checkbox" 
    className="rounded-checkbox"
    checked={checked} 
    onChange={(e) => {handleOnChange(id)}}/>
  )
}