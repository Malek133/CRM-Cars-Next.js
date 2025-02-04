// "use client"

// import { useSession } from "next-auth/react"
// import { MainNav } from "@/components/main-nav"
// import { Navbar } from "@/components/Navbar"
// import type React from "react"

// export function AuthWrapper({ children }: { children: React.ReactNode }) {
//   const { data: session, status } = useSession()

//   if (status === "loading") {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="flex flex-col h-screen bg-background">
//       <Navbar />
//       {session ? (
//         <div className="flex flex-1 overflow-hidden">
//           <MainNav />
//           <main className="flex-1 overflow-y-auto p-8">{children}</main>
//         </div>
//       ) : (
//         <main className="flex-1 overflow-y-auto">{children}</main>
//       )}
//     </div>
//   )
// }

"use client"

import { useSession } from "next-auth/react"
import { MainNav } from "@/components/main-nav"
import { Navbar } from "@/components/Navbar"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import type React from "react" // Added import for React

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <Navbar />
      {session ? (
        <div className="flex flex-1 overflow-hidden">
          <MainNav />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      ) : (
        <main className="flex-1 overflow-y-auto">{children}</main>
      )}
    </div>
  )
}

