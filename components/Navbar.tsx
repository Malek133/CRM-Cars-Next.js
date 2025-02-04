"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function Navbar() {
  const { data: session } = useSession()
  const { theme, setTheme } = useTheme()

  const handleLogout = async () => {
    await signOut({ redirect: false })
    window.location.href = "/login"
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <Link href="/" className="text-xl font-bold">
        Car Market System
      </Link>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        {session ? (
          <>
            <span>Welcome, {session.user?.name || session.user?.email}</span>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  )
}

