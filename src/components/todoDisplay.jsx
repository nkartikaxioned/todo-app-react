import { CheckMark } from "./checkMark";

export const TodoDisplay = ({ todoArray, setTodoArray, getDateFunction }) => {
  return (
    <table>
      <tr>
        <th>Status</th>
        <th>Name</th>
        <th>Created at</th>
        <th>Actions</th>
      </tr>
      {todoArray.map((element) => {
        <tr>
          <td>
            <CheckMark 
            element={element} 
            todoArray = {todoArray}
            setTodoArray = {setTodoArray}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>;
      })}
    </table>
  );
};
