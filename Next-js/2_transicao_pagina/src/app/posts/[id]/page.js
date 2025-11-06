import Link from "next/link";
const Postpage = ({ params }) => {
  // load de dados baseado em params.id

  const id = params.id;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Titulo: {id}</h1>
      <p>Texto do post...</p>
      <Link href="/posts">Página de posts</Link>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Postpage;
