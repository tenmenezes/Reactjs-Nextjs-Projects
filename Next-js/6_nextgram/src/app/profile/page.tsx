import { getUserByEmail } from "@/actions";
import ProfileForm from "@/components/ProfileForm";
import { auth } from "auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const session = await auth();

  if (!session || !session.user?.email) return redirect("/");

  const user = await getUserByEmail(session.user.email);

  if (!user) return redirect("/");

  return (
    <div className="flex min-h-screen flex-col text-black font-sans">
      <div className="w-[35rem] border border-zinc-50/10 mx-auto my-10 p-4 shadow-lg backdrop-blur-2xl bg-transparent rounded-lg">
        <h1 className="text-[2rem] leading-10 font-semibold text-center">
          Perfil de {user.name}
        </h1>
        {user.image && (
          <div className="w-full flex justify-center my-6">
            <Image
              src={user.image}
              alt={`Perfil de ${user.name}`}
              className="w-80 h-80 p4 object-cover rounded"
              width={320}
              height={320}
            />
          </div>
        )}
        <ProfileForm user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
