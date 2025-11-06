import { getUserByEmail } from "@/actions";
import { auth, signOut } from "auth";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

const Navbar = async () => {
  const session = await auth();

  const user = await getUserByEmail(session?.user.email);

  return (
    <div className="shadow-lg text-black px-10 py-5 flex justify-between items-center">
      <Link
        href="/"
        className="text-black hover:text-zinc-700 text-lg font-bold"
      >
        NextGram Project
      </Link>
      <div>
        {user ? (
          // Logado
          <div className="flex gap-4 items-center">
            {/* login => name, email, imagem do usuário da rede social */}
            <p className="text-black font-medium ">{user.name}</p>
            {user.image && (
              <Image
                src={user.image}
                alt={`Perfil de: ${user.name}`}
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            )}
            <Link
              href="/profile"
              className="text-black font-medium hover:text-zinc-700"
            >
              Perfil
            </Link>
            <Link
              href="/post/new"
              className="text-black font-medium hover:text-zinc-700"
            >
              Criar postagem
            </Link>
            <Link
              href="/my-posts"
              className="text-black font-medium hover:text-zinc-700"
            >
              Minhas postagens
            </Link>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button text="Sair" danger={true} type="submit" />
            </form>
          </div>
        ) : (
          <ButtonLink text="Entrar" url="/signin"></ButtonLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
