// "use server"

// import { revalidatePath } from "next/cache"
// import type { CarMake, CarModel } from "@/lib/car-data"

// // This is a mock database. In a real application, you'd use a proper database.
// let cars = [
//   { id: 1, make: "Toyota", model: "Corolla", year: 2022, price: 20000, quantity: 5 },
//   { id: 2, make: "Honda", model: "Civic", year: 2021, price: 22000, quantity: 3 },
//   { id: 3, make: "Ford", model: "Mustang", year: 2023, price: 35000, quantity: 2 },
//   { id: 4, make: "Chevrolet", model: "Camaro", year: 2022, price: 33000, quantity: 1 },
//   { id: 5, make: "Tesla", model: "Model 3", year: 2023, price: 45000, quantity: 4 },
//   { id: 6, make: "BMW", model: "3 Series", year: 2022, price: 40000, quantity: 2 },
//   { id: 7, make: "Mercedes-Benz", model: "C-Class", year: 2023, price: 43000, quantity: 3 },
//   { id: 8, make: "Audi", model: "A4", year: 2022, price: 39000, quantity: 2 },
//   { id: 9, make: "Lexus", model: "IS", year: 2023, price: 38000, quantity: 1 },
// ]

// export async function getCars() {
//   return cars
// }

// export async function addCar(formData: FormData) {
//   const make = formData.get("make") as CarMake
//   const model = formData.get("model") as CarModel
//   const year = Number.parseInt(formData.get("year") as string)
//   const price = Number.parseInt(formData.get("price") as string)
//   const quantity = Number.parseInt(formData.get("quantity") as string)

//   const newCar = {
//     id: cars.length + 1,
//     make,
//     model,
//     year,
//     price,
//     quantity,
//   }

//   cars.push(newCar)
//   revalidatePath("/")
// }

// export async function updateCar(formData: FormData) {
//   const id = Number.parseInt(formData.get("id") as string)
//   const make = formData.get("make") as CarMake
//   const model = formData.get("model") as CarModel
//   const year = Number.parseInt(formData.get("year") as string)
//   const price = Number.parseInt(formData.get("price") as string)
//   const quantity = Number.parseInt(formData.get("quantity") as string)

//   cars = cars.map((car) => (car.id === id ? { ...car, make, model, year, price, quantity } : car))

//   revalidatePath("/")
// }

// export async function deleteCar(formData: FormData) {
//   const id = Number.parseInt(formData.get("id") as string)
//   cars = cars.filter((car) => car.id !== id)
//   revalidatePath("/")
// }

"use server"

import { revalidatePath } from "next/cache"
import { PrismaClient } from "@prisma/client"
import type { CarMake, CarModel } from "@/lib/car-data"

const prisma = new PrismaClient()

export async function getCars() {
  return prisma.car.findMany()
}

export async function addCar(formData: FormData) {
  const make = formData.get("make") as CarMake
  const model = formData.get("model") as CarModel
  const year = Number.parseInt(formData.get("year") as string)
  const price = Number.parseInt(formData.get("price") as string)
  const quantity = Number.parseInt(formData.get("quantity") as string)

  await prisma.car.create({
    data: {
      make,
      model,
      year,
      price,
      quantity,
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

  await prisma.car.update({
    where: { id },
    data: { make, model, year, price, quantity },
  })

  revalidatePath("/")
}

export async function deleteCar(formData: FormData) {
  const id = Number.parseInt(formData.get("id") as string)
  await prisma.car.delete({ where: { id } })
  revalidatePath("/")
}

