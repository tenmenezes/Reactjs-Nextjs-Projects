"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {
  const id = Number(formData.get("id"));

  await db.todo.delete({
    where: { id },
  });

  revalidatePath("/");

  // redirect = return + refresh
  redirect("/");
}

export const addTodo = async (FormData) => {
  // 2 - inserindo dados no banco
  const titulo = FormData.get("titulo");
  const descricao = FormData.get("descricao");
  const status = "pendente";

  // realizando inserção
  const todo = await db.todo.create({
    data: {
      titulo,
      descricao,
      status,
    },
  });

  revalidatePath("/");

  redirect("/");
};

export const findTodoById = async (id) => {
  const todo = db.todo.findFirst({
    where: { id: Number(id) },
  });

  return todo;
};

export const updateTodo = async (formState, formData) => {
  const id = formData.get("id");
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");

  const numericId = Number(id);

  try {
    // throw new Error("Erro: Falha ao salvar dados, sistema offline.");

    if (titulo.length < 5) {
      return {
        errors: "Erro: O título precisa de pelo menos 5 caracteres.",
      };
    }

    if (descricao.length < 10) {
      return {
        errors: "Erro: A descrição precisa de pelo menos 10 caracteres.",
      };
    }

    if (!numericId || isNaN(numericId)) {
      return {
        errors: "ID inválido recebido para update",
      };
    }

    // opcional: verifica se o registro existe antes
    const exists = await db.todo.findUnique({ where: { id: numericId } });
    if (!exists) {
      return {
        errors: "Nenhum registro encontrado com este id.",
      };
    }

    await db.todo.update({
      where: { id: Number(id) },
      data: { titulo, descricao },
    });

    revalidatePath("/");

    redirect("/");
  } catch (error) {
    return {
      errors: error.message,
    };
  }
};

export async function toggleTodoStatus(formData) {
  const id = formData.get("id");

  const todo = await db.todo.findFirst({
    where: { id: Number(id) },
  });

  if (!todo) {
    throw new Error("Todo não existe");
  }

  const novoStatus = todo.status === "pendente" ? "concluido" : "pendente";

  console.log(id, todo.status, novoStatus);

  await db.todo.update({
    where: { id: Number(id) },
    data: { status: novoStatus },
  });

  revalidatePath("/");

  redirect("/");

}
