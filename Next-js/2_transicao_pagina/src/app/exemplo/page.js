"use client";

import { createServerSearchParamsForServerPage } from "next/dist/server/request/search-params";
//  REGRA
// --------
// sempre que usar algo com use (hook)
// tem que estar em um ambiente client (do cliente)

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ExemploPage = () => {
  const searchParams = useSearchParams();

  const valorParams = searchParams.get("parametro"); // get method => valor do parâmetro

  const presencaParams = searchParams.has("parametro"); // has method => valor true / false

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Página de exemplo</h1>
          <h2>Exibindo resultados para - {valorParams}</h2>
          <p>Este parâmetro: {presencaParams ? "Existe" : "Não existe"}</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default ExemploPage;
