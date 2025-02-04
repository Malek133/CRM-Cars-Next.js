
import { requireAuth } from "@/lib/auth"

export default async function Search() {
  await requireAuth()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Vehicle Search</h1>
      <p>Here customers will be able to search and filter vehicles.</p>
    </div>
  )
}


