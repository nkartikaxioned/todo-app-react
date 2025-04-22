import { useState } from "react"
import { TodoInput } from "./todoInput";
import { TodoDisplay } from "./todoDisplay";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const localStorageKey = "todoApp";
export const TodoMain = () => {
  const [todoValue, setTodoValue] = useState({id: "", content: "", checked: false, date: ""});
  const [todoArray, setTodoArray] = useState(() => {
    const localStorageValue = localStorage.getItem(localStorageKey);
    return localStorageValue ? JSON.parse(localStorageValue) : [];
  });
  const [editTodo, setEditTodo] = useState("");
  const [addTodoVisible, setAddTodoVisible] = useState(false);
  const [filterValue, setFilterValue] = useState("all");

  localStorage.setItem(localStorageKey, JSON.stringify(todoArray));

  //function to get formated date and time
  const getDateFunction = () => {
    const date = new Date();
    const hours = date.getHours(),
    minutes = date.getMinutes(),
    formattedHours =  hours % 12 || 12,
    formatedMinuites = minutes.toString().padStart(2, "0"),
    localDate = date.toLocaleDateString(),
    morningNight = hours > 12 ? "pm" : "am";

    return `${formattedHours} : ${formatedMinuites} ${morningNight} ${localDate}`;
  }
  
  //get count function
  const getTotalCount = () => todoArray.length;
  //add task toggle functionality
  const handleAddTodo = () => setAddTodoVisible(!addTodoVisible);
  //fliter functionality
  const filteredTodos = todoArray.filter(todo => {
    if (filterValue === "checked") return todo.checked;
    if (filterValue === "un-checked") return !todo.checked;
    return true;
  });

  return (
    <div>
      <Select onValueChange={(value) => setFilterValue(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Todo Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="checked">Checked</SelectItem>
          <SelectItem value="un-checked">Un-Checked</SelectItem>
        </SelectContent>
      </Select>
      <button onClick={(e) => {handleAddTodo()}}>Add Todo</button>
      <TodoDisplay 
        todoArray={filteredTodos} 
        getDateFunction={getDateFunction} 
        setTodoArray = {setTodoArray}
        editTodo = {editTodo}
        setEditTodo = {setEditTodo}
      />
      {addTodoVisible ? (
        <TodoInput 
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        setTodoArray={setTodoArray} 
        getDateFunction={getDateFunction}/>
      ) : ""}
      <div>
        <span>Todo Count : {getTotalCount()}</span>
      </div>
    </div>
  );
}