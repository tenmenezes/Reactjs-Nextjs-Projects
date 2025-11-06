import Link from "next/link";

const ProductPage = ({ params }) => {
  const produto = params.produto;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Produto: {produto}</h1>

      <Link href="/produtos/categorias/roupas">Categoria de roupas</Link>
    </div>
  );
};

export default ProductPage;
