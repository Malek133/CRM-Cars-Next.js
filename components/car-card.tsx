import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CarCardProps {
  id: number
  make: string
  model: string
  year: number
  price: number
  quantity: number
}

export function CarCard({ id, make, model, year, price, quantity }: CarCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-4">
          <Image
            src={`/placeholder.svg?height=300&width=300&text=${make}+${model}`}
            alt={`${make} ${model}`}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h3 className="text-lg font-semibold">
          {make} {model}
        </h3>
        <p className="text-sm text-gray-500">Year: {year}</p>
        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
        <p className="text-xl font-bold mt-2">${price.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Details</Button>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

