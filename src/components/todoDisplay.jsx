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
    <table className="custom-table">
      <thead>
        <tr>
          <th className="col-status">Status</th>
          <th className="col-name">Name</th>
          <th className="col-created">Created at</th>
          <th className="col-actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todoArray.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center text-gray-500 py-4">
              <span className="animate-pulse">💤</span>No todos here! Time to relax 😎
            </td>
          </tr>
        ) : (
          todoArray.map((element) => (
            <tr key={element.id} className="text-center">
              <td className="col-status">
                <CheckMark 
                  element={element} 
                  todoArray = {todoArray}
                  setTodoArray = {setTodoArray}
                />
              </td>
              <td className="col-name">
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
              <td className="col-created">
                {element.date}
              </td>
              <td className="col-actions">
                <div className="flex justify-evenly items-baseline">
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
