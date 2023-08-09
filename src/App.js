import { useState } from "react";
import TodoList from "./Components/TodoList";
import InputField from "./PageElements/inputField";
import "./App.css";
import Header from "./PageElements/Header";

function App() {
  //Создаем два стейта: для хранения состояния массива тудушек,
  //а также для хранения состояния текстового поля новой задачи
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  //Далее прописан функционал по добавлению,
  //выполнению и удалению одной задачи соответственно
  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="App">
      <Header />
      {/* В компонент, отвечающий за добавление новой задачи 
      передаем значение текстового поля, обработчик текстового поля и, 
      непосредственно, модуль, отвечающий за добавление задачи */}
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      {/* Аналогичные действия проделываем для компонента TodoList */}
      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
