const InputField = ({ text, handleInput, handleSubmit }) => {
  //Данный компонент отвечает за отображение
  //input-а с кнопкой для добавления задачи
  return (
    <div className="inputField">
      <label>
        <input
          className="inputField__input"
          placeholder="Enter Todo name"
          value={text}
          onChange={(e) => handleInput(e.target.value)}
        />
        {/* Добавление задачи происходит по срабатыванию события onClick*/}
        <button className="inputField__button" onClick={handleSubmit}>
          <strong>Add TODO</strong>
        </button>
      </label>
    </div>
  );
};

export default InputField;
