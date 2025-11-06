import { addTodo } from "@/actions";

// 1 - criação do form
const TodoPage = () => {
  /*
        Sempre que for trabalhar com next.js 
        utilizar formData para pegar os estados/dados do input

        formData => useState (React.js)
    */
  // const addTodo = async (FormData) => {
  //   "use server"; // pode ser isolado a nível de função, podendo ser usado apenas quando for utilizar ações que pegam do servidor em questão
  //   // 2 - inserindo dados no banco
  //   console.log(FormData);

  //   const titulo = FormData.get("titulo");
  //   const descricao = FormData.get("descricao");
  //   const status = "pendente";

  //   console.log(titulo, descricao);

  //   // realizando inserção
  //   const todo = await db.todo.create({
  //     data: {
  //       titulo,
  //       descricao,
  //       status,
  //     },
  //   });

  //   console.log(todo);

  //   redirect("/");
  // };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Criar nova tarefa</h1>
      <form
        action={addTodo}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      >
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
          ></textarea>
        </label>
        <button
          type="submit"
          className="cursor-pointer px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default TodoPage;
