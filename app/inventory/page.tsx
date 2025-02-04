
// import { getCars } from "@/app/actions/carActions"
// import { CarCard } from "@/components/car-card"
// import { requireAuth } from "@/lib/auth"

// export default async function Inventory() {
//   await requireAuth()
//   const cars = await getCars()

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cars.map((car) => (
//           <CarCard
//             key={car.id}
//             id={car.id}
//             make={car.make}
//             model={car.model}
//             year={car.year}
//             price={car.price}
//             quantity={car.quantity}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

import { getCars } from "@/app/actions/carActions"
import { CarCard } from "@/components/car-card"
import { requireAuth } from "@/lib/auth"

export default async function Inventory() {
  await requireAuth()
  const cars = await getCars()

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            make={car.make}
            model={car.model}
            year={car.year}
            price={car.price}
            quantity={car.quantity}
            imageUrl={car.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

