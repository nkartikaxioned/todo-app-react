import { MdOutlineCancel } from "react-icons/md";

export const CancelEdit = ({setEditTodoContent, setEditTodo}) => {
  //function to cancel editing and empty values
  const handleOnClickCancel = () => {
    setEditTodoContent("");
    setEditTodo("");
  }

  return (
    <button onClick={(e) => {handleOnClickCancel()}}>
      <MdOutlineCancel size={20}/>
    </button>
  )
}