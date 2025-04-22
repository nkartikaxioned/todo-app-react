import { useState } from "react";
import { CheckMark } from "./checkMark";
import { DeleteTodo } from "./deleteTodo";
import { EditTodo } from "./editTodo";
import { CancelEdit } from "./cancelEdit";

export const TodoDisplay = ({ todoArray, getDateFunction, setTodoArray, editTodo, setEditTodo}) => {

  const [editTodoContent, setEditTodoContent] = useState("");

  //function to handle input value change
  const handleValueChange = (value) => {
    setEditTodoContent(value);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Name</th>
          <th>Created at</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {todoArray.map((element) => {
        return(
        <tr key={element.id}>
          <td>
            <CheckMark 
              element={element} 
              todoArray = {todoArray}
              setTodoArray = {setTodoArray}
            />
          </td>
          <td>
            {editTodo === element.id ? 
              (<input 
                value = {editTodoContent}
                onChange={(e) => {handleValueChange(e.target.value)}} />
              ) : ( 
              <p className={element.checked ? "line-through" : ""}>{element.content}</p>
            )}
          </td>
          <td>
            {element.date}
          </td>
          <td>
            {editTodo === element.id ? (
              <CancelEdit 
                setEditTodoContent = {setEditTodoContent}
                setEditTodo = {setEditTodo}
              />
            ) : (
              <DeleteTodo 
                id = {element.id} 
                todoArray = {todoArray}
                setTodoArray = {setTodoArray}
              />
            )}
          </td>
          <td>
            <EditTodo 
              id = {element.id}
              element = {element} 
              editTodo = {editTodo}
              setEditTodo = {setEditTodo}
              editTodoContent = {editTodoContent}
              setEditTodoContent = {setEditTodoContent}
              todoArray = {todoArray}
              setTodoArray = {setTodoArray}
              getDateFunction = {getDateFunction}
            />
          </td>
        </tr>
        )
      })}
      </tbody>
    </table>
  );
};
