import { CheckMark } from "./checkMark";
import { DeleteTodo } from "./deleteTodo";

export const TodoDisplay = ({ todoArray, setTodoArray, getDateFunction }) => {
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
          <td></td>
        </tr>
        )
      })}
      </tbody>
    </table>
  );
};
