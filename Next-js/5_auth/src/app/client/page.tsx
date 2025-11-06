"use client";

import { useSession } from "next-auth/react";

const ClientPage = () => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    // aqui poderia ser um redirect() também
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <p className="bg-red-700 rounded p-5">
          Erro: Você precisa estar autenticado!
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Componente client autenticado</h1>
    </div>
  );
};

export default ClientPage;
