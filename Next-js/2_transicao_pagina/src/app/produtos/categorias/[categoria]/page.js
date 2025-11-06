import Link from "next/link";

const CategoryPage = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Página de categoria de roupas</h1>

      <Link href="/produtos/categorias/roupas/camisa_gola_v">
        Camisa gola v
      </Link>

      <Link href="/">Home</Link>
    </div>
  );
};

export default CategoryPage;
