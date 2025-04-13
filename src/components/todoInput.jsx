
export const TodoInput = ({todoValue, setTodoValue}) => {

const handleOnChange = (value) => {
  setTodoValue({
    
  })
}

  return (
    <form>
      <div>
        <input type="text" value={todoValue} onChange={(e) => {handleOnChange(e.target.value)}} />
      </div>
    </form>
  )
}