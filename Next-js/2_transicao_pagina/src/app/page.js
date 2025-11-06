import BotaoRedirect from "@/components/BotaoRedirect";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Aula 1 - navegacao*/}
      <h1>Home Page</h1>
      <Link href="/sobre">Sobre</Link>
      {/* Aula 2 - dados dinamicos*/}
      <h1>Acessar Posts</h1>
      <Link href="/posts">Posts</Link>
      {/* parâmetros na URL */}
      <Link href="/exemplo?parametro=2007">Página com parâmetro</Link>
      {/* Aula 4  - nested routes */}
      <Link href="/produtos/categorias/roupas">Categoria de roupas</Link>
      {/* Aua 7 - nested layouts */}
      <Link href="/dashboard">Dashboard</Link>
      {/* aula 8 - useRouter */}
      <BotaoRedirect />
      {/* aula 9 - redirect */}
      <Link href="/profile">Ir para meu perfil</Link>
    </div>
  );
}
