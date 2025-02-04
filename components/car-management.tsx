

// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { addCar, updateCar, deleteCar } from "@/app/actions/carActions"
// import { carMakes, carModels, type CarMake, type CarModel } from "@/lib/car-data"

// type Car = {
//   id: number
//   make: string
//   model: string
//   year: number
//   price: number
//   quantity: number
// }

// export function CarManagement({ cars }: { cars: Car[] }) {
//   const [editingCar, setEditingCar] = useState<Car | null>(null)
//   const [selectedMake, setSelectedMake] = useState<CarMake | "">("")
//   const [selectedModel, setSelectedModel] = useState<CarModel | "">("")
//   const router = useRouter()

//   useEffect(() => {
//     if (editingCar) {
//       setSelectedMake(editingCar.make as CarMake)
//       setSelectedModel(editingCar.model as CarModel)
//     } else {
//       setSelectedMake("")
//       setSelectedModel("")
//     }
//   }, [editingCar])

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     const form = event.currentTarget
//     const formData = new FormData(form)

//     formData.set("make", selectedMake)
//     formData.set("model", selectedModel)

//     if (editingCar) {
//       await updateCar(formData)
//       setEditingCar(null)
//     } else {
//       await addCar(formData)
//     }

//     form.reset()
//     setSelectedMake("")
//     setSelectedModel("")
//     router.refresh()
//   }

//   const handleDelete = async (id: number) => {
//     const formData = new FormData()
//     formData.append("id", id.toString())
//     await deleteCar(formData)
//     router.refresh()
//   }

//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-bold">Car Management</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="hidden" name="id" value={editingCar?.id || ""} />
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <Label htmlFor="make">Make</Label>
//             <Select
//               value={selectedMake}
//               onValueChange={(value: CarMake) => {
//                 setSelectedMake(value)
//                 setSelectedModel("")
//               }}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a make" />
//               </SelectTrigger>
//               <SelectContent>
//                 {carMakes.map((make) => (
//                   <SelectItem key={make} value={make}>
//                     {make}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div>
//             <Label htmlFor="model">Model</Label>
//             <Select
//               value={selectedModel}
//               onValueChange={(value: CarModel) => setSelectedModel(value)}
//               disabled={!selectedMake}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a model" />
//               </SelectTrigger>
//               <SelectContent>
//                 {selectedMake &&
//                   carModels[selectedMake].map((model) => (
//                     <SelectItem key={model} value={model}>
//                       {model}
//                     </SelectItem>
//                   ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div>
//             <Label htmlFor="year">Year</Label>
//             <Input id="year" name="year" type="number" defaultValue={editingCar?.year || ""} required />
//           </div>
//           <div>
//             <Label htmlFor="price">Price</Label>
//             <Input id="price" name="price" type="number" defaultValue={editingCar?.price || ""} required />
//           </div>
//           <div>
//             <Label htmlFor="quantity">Quantity</Label>
//             <Input id="quantity" name="quantity" type="number" defaultValue={editingCar?.quantity || ""} required />
//           </div>
//         </div>
//         <Button type="submit" disabled={!selectedMake || !selectedModel}>
//           {editingCar ? "Update Car" : "Add Car"}
//         </Button>
//         {editingCar && (
//           <Button type="button" variant="outline" onClick={() => setEditingCar(null)}>
//             Cancel Edit
//           </Button>
//         )}
//       </form>
//       <div className="space-y-2">
//         {cars.map((car) => (
//           <div key={car.id} className="flex items-center justify-between p-2 border rounded">
//             <span>
//               {car.make} {car.model} ({car.year}) - ${car.price} - Quantity: {car.quantity}
//             </span>
//             <div>
//               <Button variant="outline" onClick={() => setEditingCar(car)}>
//                 Edit
//               </Button>
//               <Button variant="destructive" onClick={() => handleDelete(car.id)}>
//                 Delete
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addCar, updateCar, deleteCar } from "@/app/actions/carActions"
import { carMakes, carModels, type CarMake, type CarModel } from "@/lib/car-data"
import Image from "next/image"

type Car = {
  id: number
  make: string
  model: string
  year: number
  price: number
  quantity: number
  imageUrl: string | null
}

export function CarManagement({ cars }: { cars: Car[] }) {
  const [editingCar, setEditingCar] = useState<Car | null>(null)
  const [selectedMake, setSelectedMake] = useState<CarMake | "">("")
  const [selectedModel, setSelectedModel] = useState<CarModel | "">("")
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (editingCar) {
      setSelectedMake(editingCar.make as CarMake)
      setSelectedModel(editingCar.model as CarModel)
      setImagePreview(editingCar.imageUrl)
    } else {
      setSelectedMake("")
      setSelectedModel("")
      setImagePreview(null)
    }
  }, [editingCar])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    formData.set("make", selectedMake)
    formData.set("model", selectedModel)

    if (editingCar) {
      await updateCar(formData)
      setEditingCar(null)
    } else {
      await addCar(formData)
    }

    form.reset()
    setSelectedMake("")
    setSelectedModel("")
    setImagePreview(null)
    router.refresh()
  }

  const handleDelete = async (id: number) => {
    const formData = new FormData()
    formData.append("id", id.toString())
    await deleteCar(formData)
    router.refresh()
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Car Management</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="id" value={editingCar?.id || ""} />
        <input type="hidden" name="currentImageUrl" value={editingCar?.imageUrl || ""} />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="make">Make</Label>
            <Select
              value={selectedMake}
              onValueChange={(value: CarMake) => {
                setSelectedMake(value)
                setSelectedModel("")
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a make" />
              </SelectTrigger>
              <SelectContent>
                {carMakes.map((make) => (
                  <SelectItem key={make} value={make}>
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="model">Model</Label>
            <Select
              value={selectedModel}
              onValueChange={(value: CarModel) => setSelectedModel(value)}
              disabled={!selectedMake}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                {selectedMake &&
                  carModels[selectedMake].map((model) => (
                    <SelectItem key={model} value={model}>
                      {model}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="year">Year</Label>
            <Input id="year" name="year" type="number" defaultValue={editingCar?.year || ""} required />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input id="price" name="price" type="number" defaultValue={editingCar?.price || ""} required />
          </div>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" name="quantity" type="number" defaultValue={editingCar?.quantity || ""} required />
          </div>
          <div>
            <Label htmlFor="image">Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>
        {imagePreview && (
          <div className="mt-4">
            <Image
              src={imagePreview || "/placeholder.svg"}
              alt="Car preview"
              width={200}
              height={150}
              className="object-cover rounded"
            />
          </div>
        )}
        <Button type="submit" disabled={!selectedMake || !selectedModel}>
          {editingCar ? "Update Car" : "Add Car"}
        </Button>
        {editingCar && (
          <Button type="button" variant="outline" onClick={() => setEditingCar(null)}>
            Cancel Edit
          </Button>
        )}
      </form>
      <div className="space-y-2">
        {cars.map((car) => (
          <div key={car.id} className="flex items-center justify-between p-2 border rounded">
            <div className="flex items-center space-x-4">
              {car.imageUrl && (
                <Image
                  src={car.imageUrl || "/placeholder.svg"}
                  alt={`${car.make} ${car.model}`}
                  width={100}
                  height={75}
                  className="object-cover rounded"
                />
              )}
              <span>
                {car.make} {car.model} ({car.year}) - ${car.price} - Quantity: {car.quantity}
              </span>
            </div>
            <div>
              <Button variant="outline" onClick={() => setEditingCar(car)}>
                Edit
              </Button>
              <Button variant="destructive" onClick={() => handleDelete(car.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

