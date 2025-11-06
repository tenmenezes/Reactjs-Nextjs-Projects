import Button from "@/components/Button";
import { db } from "@/db";

import Link from "next/link";
import { deleteTodo, toggleTodoStatus } from "@/actions";
import Checkbox from "@/components/Checkbox";

// export const revalidate = 20;

// export const dynamic = "force-dynamic";

// 'async function' torna o componente um server component, obrigatório quando utilizar 'await'
export default async function Home() {
  // 3 - resgatando dados do banco (consulta)
  const todos = await db.todo.findMany();

  // async function deleteTodo(formData) {
  //   "use server";

  //   const id = Number(formData.get("id"));

  //   await db.todo.delete({
  //     where: { id },
  //   });

  //   redirect("/");
  // }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Todos</h1>
      <div className="space-y-4">
        {/* adicionando map */}
        {todos.map((todo) => (
          <div key={todo.id} className={`bg-gray-100 rounded-g shadow-md transition ${todo.status === "concluido" ? "bg-green-100" : ""}`}>
            <div className="flex justify-between items-start p-4">
              <div>
                {" "}
                <h2>{todo.titulo}</h2>
                <br />
                <p>{todo.descricao}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="italic">Status:</span>
                <form id={`form-${todo.id}`} action={toggleTodoStatus}>
                  <input type="hidden" name="id" value={todo.id} />
                  <Checkbox
                    initialChecked={todo.status === "concluido"}
                    formId={`form-${todo.id}`}
                  />
                </form>
              </div>
              {/* Ações */}
              <div className="flex space-x-2 mt-3">
                
                <Link
                  href={`/todos/${todo.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Visualizar
                </Link>
                <Link
                  href={`/todos/${todo.id}/edit`}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </Link>
                {/* veremos muito isso em projetos reais, client components com server actions */}
                <form action={deleteTodo}>
                  <input type="hidden" name="id" value={todo.id} />
                  <Button className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Excluir
                  </Button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
