import { useState } from "react";
import { CheckMark } from "./checkMark";
import { DeleteTodo } from "./deleteTodo";
import { EditTodo } from "./editTodo";
import { CancelEdit } from "./cancelEdit";
import { Input } from "@/components/ui/input"


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
        {todoArray.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center text-gray-500 py-4">
              <span className="animate-pulse">💤</span>No todos found. Try a different filter!
            </td>
          </tr>
        ) : (
          todoArray.map((element) => (
            <tr key={element.id} className="text-center">
              <td>
                <CheckMark 
                  element={element} 
                  todoArray = {todoArray}
                  setTodoArray = {setTodoArray}
                />
              </td>
              <td>
                {editTodo === element.id ? 
                  (
                    <Input 
                      className="default-input" 
                      value = {editTodoContent} 
                      onChange={(e) => {handleValueChange(e.target.value)}}
                    />
                  ) : ( 
                  <p className={element.checked ? "line-through" : ""}>{element.content}</p>
                )}
              </td>
              <td>
                {element.date}
              </td>
              <td>
                <div className="flex justify-evenly">
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
                </div>
              </td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
};
