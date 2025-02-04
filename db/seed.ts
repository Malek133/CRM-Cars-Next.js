import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const cars = [
    { make: "Toyota", model: "Corolla", year: 2022, price: 20000, quantity: 5 },
    { make: "Honda", model: "Civic", year: 2021, price: 22000, quantity: 3 },
    { make: "Ford", model: "Mustang", year: 2023, price: 35000, quantity: 2 },
    { make: "Chevrolet", model: "Camaro", year: 2022, price: 33000, quantity: 1 },
    { make: "Tesla", model: "Model 3", year: 2023, price: 45000, quantity: 4 },
  ]

  for (const car of cars) {
    await prisma.car.create({
      data: car,
    })
  }

  console.log("Seed data inserted successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

