import { redirect } from "next/navigation";

const ProfilePage = () => {

    // true = logado, false = deslogado
    // chamada pelo banco tentando achar o usuáro pelo id ou email
    const user = false;

    if (!user) {
        redirect("/");
    }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Bem vindo ao seu perfil!</h1>
    </div>
  );
};

export default ProfilePage;
