import { findTodoById } from "@/actions";
import TodoForm from "@/components/TodoForm";

const TodoEdit = async ({ params }) => {
  const { id } = await params;

  const todo = await findTodoById(id);

  if (!todo) {
    return <div className="text-center mt-10">Tarefa não encontrada 😕</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Editar Tarefa: {todo.titulo}
      </h1>
      <TodoForm todo={todo} /> {/* Passando o todo pro form */}
    </div>
  );
};

export default TodoEdit;
