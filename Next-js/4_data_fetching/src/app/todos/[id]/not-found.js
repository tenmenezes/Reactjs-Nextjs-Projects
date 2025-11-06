import Link from "next/link";

const TodoNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-4 bg-red-500 text-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h1 className="text-center font-bold ">Todo não encontrado.</h1>
        <Link href="/" className="text-center bg-green-200 hover:bg-green-400 transition text-red-500 font-bold py-2 px-4 rounded shadow-lg">
          Voltar para a home
        </Link>
      </div>
    </div>
  );
};

export default TodoNotFound;
