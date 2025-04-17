

export const CheckMark = ({element, todoArray}) => {
  const {id,content, checked, date} = element;

const handleOnChange = (id) => {
  const updatedTodoArray = todoArray.filter((element) => {
    
  })
}

  return(
    <input type="checkbox" 
    checked={id} 
    onChange={(e) => {handleOnChange(id)}}/>
  )
}