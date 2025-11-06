import { db } from "@/db";
import { notFound } from "next/navigation";

const TodoShow = async ({ params }) => {
  await new Promise((a) => setTimeout(a, 2000));

  // A partir do Next 15, params virou uma Promise,
  // para permitir o carregamento paralelo de rotas dinâmicas.

  // Por isso, o Next mostra este erro:
  // params is a Promise and must be unwrapped with await or React.use()

  // A mudança foi introduzida no Next.js 15 para suportar
  // Streaming + Parallel Routes — agora, params e searchParams
  // são entregues como Promessas resolvíveis.

  // Isso é mencionado na própria mensagem de erro e no changelog:
  // 📄 https://nextjs.org/docs/messages/sync-dynamic-apis

  // next 13/14 -> const id = params.id;

  // next 15/16:
  const { id } = await params;

  // quando for utilizar codigo como {id: id} pode-se abreviar apenas pondo {id}.
  // o casting tem que ser por aqui pois na declaração está sendo parametrizada
  // como Promise, utilizando o await e não daria certo.

  const todo = await db.todo.findFirst({ where: { id: Number(id) } });

  // findUnique é mais adequado quando se filtra o valor
  // por chave primária

  if (!todo) return notFound(); // caso não encontre o id, retorna para a pag not-found mais proxima

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-4 bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h1 className="text-center">{todo.titulo}</h1>
        <hr />
        <p className="text-center">{todo.descricao}</p>
      </div>
    </div>
  );
};

export default TodoShow;
