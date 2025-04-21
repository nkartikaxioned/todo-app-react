
export const TodoInput = ({todoValue, setTodoValue, setTodoArray, getDateFunction}) => {
  const uniqueId = Date.now();
  const handleOnChange = (value) => {
    setTodoValue({
      id: uniqueId,
      content: value, 
      checked: false, 
      date: getDateFunction(),
    });
  }

  const handleFormSubmit = (todoValue) => {
    const {id, content, checked, date} = todoValue;
    if(!todoValue) return;

    setTodoArray((prev)=> [...prev,{
      id: id,
      content: content, 
      checked: checked, 
      date: date,
    }]);

    setTodoValue({id: "", content: "", checked: false, date: ""});
  }

  return (
    <form onSubmit={(e)=> {e.preventDefault(); handleFormSubmit(todoValue);}}>
      <div>
        <div>
          <input type="text" 
          value={todoValue.content} 
          onChange={(e) => {handleOnChange(e.target.value)}} />
        </div>
          <span className="display-error">{todoValue ? "" : "Input Cannot be Empty!"}</span>
      </div>
      <div>
        <button type="submit">Set Task</button>
      </div>
    </form>
  )
}