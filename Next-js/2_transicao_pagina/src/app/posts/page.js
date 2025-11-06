import Link from "next/link";
const PostsPage = () => {
  const postsIds = [1, 2, 3]; //dados ficticios

  // const posts = [{id: 1, tittle: "Sei lá", categories: []}] -> simulação de daods reais de um banco

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Página de posts</h1>
      <ul>
        {postsIds.map((id) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>Ver post - {id}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
};

export default PostsPage;
