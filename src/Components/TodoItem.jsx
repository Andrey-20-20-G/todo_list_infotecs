import { useState } from "react";

function TodoItem({ id, text, completed, removeTodo, toggleTodoComplete }) {
  //Стейт для хранения названия таски
  const [taskName, setTaskName] = useState(text);

  const UpdateField = () => {
    //Функционал по смене названия (редактирования) задачи
    const newName = prompt("Введите новое название задачи: ", taskName);
    if(newName == undefined)
    {
      return
    }
    if (newName.trim().length === 0) {
      alert("Введите непустое значение");
      return
    }
    if (newName === taskName){
      alert("Новое значение совпадает с текущим");
      return
    } 
    else{
      setTaskName(newName);
    }
  };

  return (
    // Возвращаем задачу в список задач
    //(Кнопка выполнения задачи, название задачи, кнопка удаления задачи)
    <li>
      <input
        className="checkbox__input"
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span className="TaskName__Span" onClick={UpdateField}>
        {taskName}
      </span>
      <span className="deleteButton" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
