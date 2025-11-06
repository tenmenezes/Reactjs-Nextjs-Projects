"use client";

import { updateTodo } from "@/actions";
import { useActionState } from "react";

const TodoForm = ({ todo }) => {
  // ✅ recebe o 'todo' via props
  // inicialização do hook
  const [formState, action] = useActionState(updateTodo, { errors: "" });

  return (
    <form
      action={action}
      className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
    >
      <input type="hidden" name="id" value={todo?.id ?? ""} />
      <label
        htmlFor="titulo"
        className="block text-sm font-medium text-gray-700"
      >
        Título
        <input
          type="text"
          id="titulo"
          placeholder="Insira o titulo"
          required
          name="titulo"
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
          defaultValue={todo.titulo}
        />
      </label>
      <label
        htmlFor="descricao"
        className="block text-sm font-medium text-gray-700"
      >
        Descrição
        <textarea
          type="text"
          id="descricao"
          name="descricao"
          placeholder="Descreva a tarefa"
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full h-32"
          defaultValue={todo.descricao}
        ></textarea>
      </label>
      {formState.errors ? (
        <div className="my-4 p-2 bg-red-700 border border-red-900 text-center rounded-md">{formState.errors}</div>
      ) : (
        ""
      )}
      <button
        type="submit"
        className="cursor-pointer px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Editar Tarefa
      </button>
    </form>
  );
};

export default TodoForm;
