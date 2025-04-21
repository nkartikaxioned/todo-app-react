import { CheckMark } from "./checkMark";
import { DeleteTodo } from "./deleteTodo";
import { EditTodo } from "./editTodo";

export const TodoDisplay = ({ todoArray, getDateFunction, setTodoArray, editTodo, setEditTodo}) => {
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
            {element.content}
          </td>
          <td>
            {element.date}
          </td>
          <td>
            <DeleteTodo 
            id = {element.id} 
            todoArray = {todoArray}
            setTodoArray = {setTodoArray}
            />
          </td>
          <td>
            <EditTodo 
            id = {element.id} 
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
            />
          </td>
        </tr>
        )
      })}
      </tbody>
    </table>
  );
};
