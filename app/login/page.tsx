

// "use client"

// import { useState, useEffect } from "react"
// import { signIn, useSession } from "next-auth/react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Navbar } from "@/components/Navbar"

// export default function LoginPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const router = useRouter()
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     if (status === "authenticated") {
//       router.replace("/")
//     }
//   }, [status, router])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     })

//     if (result?.error) {
//       console.error(result.error)
//     } else {
//       router.push("/")
//     }
//   }

//   if (status === "loading") {
//     return <div>Loading...</div>
//   }

//   if (status === "authenticated") {
//     return <div>Redirecting...</div>
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-background">
//       <Navbar />
//       <div className="flex items-center justify-center flex-1 bg-gray-100">
//         <div className="p-6 bg-white rounded shadow-md w-96">
//           <h1 className="text-2xl font-bold mb-4">Login</h1>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             </div>
//             <div>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Log in
//             </Button>
//           </form>
//           <div className="mt-4">
//             <Button onClick={() => signIn("github")} className="w-full mb-2">
//               Sign in with GitHub
//             </Button>
//             <Button onClick={() => signIn("google")} className="w-full">
//               Sign in with Google
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Navbar } from "@/components/Navbar"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/")
    }
  }, [status, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      console.error(result.error)
    } else {
      router.push("/")
    }
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "authenticated") {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* <Navbar /> */}
      <div className="flex items-center justify-center flex-1 bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
          <div className="mt-4">
            <Button onClick={() => signIn("github")} className="w-full mb-2">
              Sign in with GitHub
            </Button>
            <Button onClick={() => signIn("google")} className="w-full">
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

