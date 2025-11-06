import { useState } from "react";

import "./TodoApp.css";

// desafios:
// salvar itens no localstorage
// carregar com useEffect
// deletar itens com função e evento - feito

const TodoApp = () => {
  // lista de tarefas

  const [todos, setTodos] = useState([]);

  // estado de texto da terefa
  const [inputValue, setInputValue] = useState();

  // adicionar tarefa
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    if (todos.text !== "") {
      alert("Tarefa excluída com sucesso");
      setTodos((prev) => prev.filter((todos) => todos.id !== id));
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Lista de tarefas</h1>
      <br />

      {/* Form para adição de tarefas */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-field"
          placeholder="Adicionar terefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </form>

      {/* Lista de tarefas */}
      {todos.length === 0 && <p className="empty">Não há tarefas.</p>}

      <ul className="todo-list">
        {todos.map((todos) => (
          <li key={todos.id} className="todo-item">
            {todos.text}
            <button
              className="delete-button"
              onClick={() => handleDelete(todos.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
