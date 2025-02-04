"use server"

import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File
  const filename = `${Date.now()}-${file.name}`

  const { url } = await put(filename, file, {
    access: "public",
  })

  revalidatePath("/")
  return url
}

