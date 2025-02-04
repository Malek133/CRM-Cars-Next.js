import { getCars } from "@/app/actions/carActions"
import { CarSalesChart } from "@/components/car-sales-chart"
import { requireAuth } from "@/lib/auth"

export default async function Sales() {
  await requireAuth()
  const cars = await getCars()

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Sales Tracking</h1>
      <CarSalesChart cars={cars} />
    </div>
  )
}



