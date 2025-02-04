// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { CarFront, BarChart3, Search, Users, Home } from "lucide-react"

// export function MainNav() {
//   const pathname = usePathname()

//   return (
//     <ScrollArea className="w-64 border-r bg-deep-blue text-white">
//       <div className="space-y-4 py-4">
//         <div className="px-3 py-2">
//           <h2 className="mb-2 px-4 text-lg font-semibold">Car Market System</h2>
//           <div className="space-y-1">
//             <Button asChild variant="ghost" className="w-full justify-start">
//               <Link
//                 href="/"
//                 className={cn(
//                   "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
//                   pathname === "/" ? "bg-accent" : "transparent",
//                 )}
//               >
//                 <Home className="mr-2 h-4 w-4" />
//                 Dashboard
//               </Link>
//             </Button>
//             <Button asChild variant="ghost" className="w-full justify-start">
//               <Link
//                 href="/inventory"
//                 className={cn(
//                   "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
//                   pathname === "/inventory" ? "bg-accent" : "transparent",
//                 )}
//               >
//                 <CarFront className="mr-2 h-4 w-4" />
//                 Inventory
//               </Link>
//             </Button>
//             <Button asChild variant="ghost" className="w-full justify-start">
//               <Link
//                 href="/search"
//                 className={cn(
//                   "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
//                   pathname === "/search" ? "bg-accent" : "transparent",
//                 )}
//               >
//                 <Search className="mr-2 h-4 w-4" />
//                 Search
//               </Link>
//             </Button>
//             <Button asChild variant="ghost" className="w-full justify-start">
//               <Link
//                 href="/sales"
//                 className={cn(
//                   "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
//                   pathname === "/sales" ? "bg-accent" : "transparent",
//                 )}
//               >
//                 <BarChart3 className="mr-2 h-4 w-4" />
//                 Sales
//               </Link>
//             </Button>
//             <Button asChild variant="ghost" className="w-full justify-start">
//               <Link
//                 href="/crm"
//                 className={cn(
//                   "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
//                   pathname === "/crm" ? "bg-accent" : "transparent",
//                 )}
//               >
//                 <Users className="mr-2 h-4 w-4" />
//                 CRM
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </ScrollArea>
//   )
// }

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CarFront, BarChart3, Search, Users, Home } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <ScrollArea className="w-64 border-r bg-deep-blue text-white">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Car Market System</h2>
          <div className="space-y-1">
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link
                href="/Dashboard"
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === "/" ? "bg-accent" : "transparent",
                )}
              >
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link
                href="/inventory"
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === "/inventory" ? "bg-accent" : "transparent",
                )}
              >
                <CarFront className="mr-2 h-4 w-4" />
                Inventory
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link
                href="/search"
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === "/search" ? "bg-accent" : "transparent",
                )}
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link
                href="/sales"
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === "/sales" ? "bg-accent" : "transparent",
                )}
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Sales
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link
                href="/crm"
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === "/crm" ? "bg-accent" : "transparent",
                )}
              >
                <Users className="mr-2 h-4 w-4" />
                CRM
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

