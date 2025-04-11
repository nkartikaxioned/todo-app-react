import { useState } from "react"

localStorageKey = "todoApp"
export const TodoMain = () => {
  const [todoValue, setTodoValue] = useState({id: "", content: "", checked: false, date: ""});
  const [todoArray, setTodoArray] = useState(() => {
    const localStorageValue = localStorage.getItem(todoApp);
    return localStorageValue ? localStorageValue : [];
   }
  );
}