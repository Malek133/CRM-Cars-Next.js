import { requireAuth } from "@/lib/auth"

export default async function CRM() {
  await requireAuth()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Customer Relationship Management</h1>
      <p>Here you'll find basic CRM features.</p>
    </div>
  )
}



