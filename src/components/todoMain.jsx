import { useState } from "react"
import { TodoInput } from "./todoInput";

const localStorageKey = "todoApp";
export const TodoMain = () => {
  const [todoValue, setTodoValue] = useState({id: "", content: "", checked: false, date: ""});
    const [todoArray, setTodoArray] = useState(() => {
      const localStorageValue = localStorage.getItem(localStorageKey);
      return localStorageValue ? JSON.parse(localStorageValue) : [];
    }
  );

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

  return (
    <>
      <TodoInput 
      todoValue={todoValue}
      setTodoValue={setTodoValue}
      setTodoArray={setTodoArray} 
      getDateFunction={getDateFunction}/>
    </>
  );
}