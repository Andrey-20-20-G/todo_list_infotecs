import TodoItem from "../Components/TodoItem";

//Компонент отвечающий, за вывод списка задач
const TodoList = ({ todos, removeTodo, toggleTodoComplete }) => {
  return (
    <>
    <h2 className="TodoList__header">
      Todos
    </h2>
    <div className="todoList__container">
      <ul>
        {todos.map((todo) => (
          // Вызываем компонент, обрабатывающий каждую таску как отдельный объект
          // (Передаем в св-вах id таски, а также ссылки на функции,
          // которые отвечают за отрабатывание кнопки удаления и выполнения)
          <TodoItem
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodoComplete={toggleTodoComplete}
            {...todo}
          />
        ))}
      </ul>
    </div>
    </>
    
  );
};

export default TodoList;
