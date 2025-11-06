"use client";

import { createPost } from "@/actions";
import FlashMessage from "./FlashMessage";
import { useActionState, useEffect } from "react";
import ImagePreview from "./ImagePreview";
import Label from "./Label";
import Button from "./Button";
import { useRouter } from "next/navigation";

const CreatePostForm: React.FC = () => {
  const [formState, formAction] = useActionState(createPost, {
    message: "",
    type: "success",
  });

  const router = useRouter();

  useEffect(() => {
    if (formState?.type === "success") {
      const timer = setTimeout(() => router.push("/"), 500);
      return () => clearTimeout(timer);
    }
  }, [formState, router]);


  return (
    <div>
      {formState.message && (
        <FlashMessage message={formState.message} type={formState.type} />
      )}
      <form
        className="flex flex-col gap-4"
        action={formAction}
      >
        <ImagePreview />
        <div>
          <Label htmlFor="caption" text="Conteúdo do post" />
          <textarea
            id="caption"
            name="caption"
            placeholder="Digite algo..."
            className="h-32 p-2 border border-zinc-300 rounded w-full text-sm placeholder:text-zinc-500 focus:ring-0 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <Button type="submit" text="Criar Post" />
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
