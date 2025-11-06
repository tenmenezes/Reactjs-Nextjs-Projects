import { auth, signIn, signOut } from "auth";
import Link from "next/link";

const Navbar = async () => {
  const sessions = await auth();

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-white text-lg font-bold">
        Home
      </Link>
      <div>
        {sessions && sessions.user ? (
          // Logado
          <div className="flex gap-4 items-center">
            {/* login => name, email, imagem do usuário da rede social */}
            <p>{sessions.user.name}</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded cursor-pointer">
                Sair
              </button>
            </form>
          </div>
        ) : (
          // Deslogado
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">
              Entrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
