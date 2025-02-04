

// "use server"

// import { revalidatePath } from "next/cache"
// import { PrismaClient } from "@prisma/client"
// import type { CarMake, CarModel } from "@/lib/car-data"

// const prisma = new PrismaClient()

// export async function getCars() {
//   return prisma.car.findMany()
// }

// export async function addCar(formData: FormData) {
//   const make = formData.get("make") as CarMake
//   const model = formData.get("model") as CarModel
//   const year = Number.parseInt(formData.get("year") as string)
//   const price = Number.parseInt(formData.get("price") as string)
//   const quantity = Number.parseInt(formData.get("quantity") as string)

//   await prisma.car.create({
//     data: {
//       make,
//       model,
//       year,
//       price,
//       quantity,
//     },
//   })

//   revalidatePath("/")
// }

// export async function updateCar(formData: FormData) {
//   const id = Number.parseInt(formData.get("id") as string)
//   const make = formData.get("make") as CarMake
//   const model = formData.get("model") as CarModel
//   const year = Number.parseInt(formData.get("year") as string)
//   const price = Number.parseInt(formData.get("price") as string)
//   const quantity = Number.parseInt(formData.get("quantity") as string)

//   await prisma.car.update({
//     where: { id },
//     data: { make, model, year, price, quantity },
//   })

//   revalidatePath("/")
// }

// export async function deleteCar(formData: FormData) {
//   const id = Number.parseInt(formData.get("id") as string)
//   await prisma.car.delete({ where: { id } })
//   revalidatePath("/")
// }

"use server"

import { revalidatePath } from "next/cache"
import { PrismaClient } from "@prisma/client"
import type { CarMake, CarModel } from "@/lib/car-data"
import { uploadImage } from "./uploadImage"

const prisma = new PrismaClient()

export type Car = {
  id: number
  make: string
  model: string
  year: number
  price: number
  quantity: number
  imageUrl: string | null
}

export async function getCars(): Promise<Car[]> {
  return prisma.car.findMany()
}

export async function addCar(formData: FormData) {
  const make = formData.get("make") as CarMake
  const model = formData.get("model") as CarModel
  const year = Number.parseInt(formData.get("year") as string)
  const price = Number.parseInt(formData.get("price") as string)
  const quantity = Number.parseInt(formData.get("quantity") as string)
  const file = formData.get("image") as File | null

  let imageUrl = null
  if (file) {
    const imageFormData = new FormData()
    imageFormData.append("file", file)
    imageUrl = await uploadImage(imageFormData)
  }

  await prisma.car.create({
    data: {
      make,
      model,
      year,
      price,
      quantity,
      imageUrl,
    },
  })

  revalidatePath("/")
}

export async function updateCar(formData: FormData) {
  const id = Number.parseInt(formData.get("id") as string)
  const make = formData.get("make") as CarMake
  const model = formData.get("model") as CarModel
  const year = Number.parseInt(formData.get("year") as string)
  const price = Number.parseInt(formData.get("price") as string)
  const quantity = Number.parseInt(formData.get("quantity") as string)
  const file = formData.get("image") as File | null

  let imageUrl = formData.get("currentImageUrl") as string
  if (file) {
    const imageFormData = new FormData()
    imageFormData.append("file", file)
    imageUrl = await uploadImage(imageFormData)
  }

  await prisma.car.update({
    where: { id },
    data: { make, model, year, price, quantity, imageUrl },
  })

  revalidatePath("/")
}

export async function deleteCar(formData: FormData) {
  const id = Number.parseInt(formData.get("id") as string)
  await prisma.car.delete({ where: { id } })
  revalidatePath("/")
}

