
// import "./globals.css"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
// import { AuthWrapper } from "@/components/auth-wrapper"

// import { Providers } from "./providers"
// import type React from "react"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Car Market Management System",
//   description: "Streamline your vehicle inventory and sales process",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Providers>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             <div className="flex h-screen bg-background">
              
//               <main className="flex-1 overflow-y-auto p-8">
//                 <AuthWrapper>
//                   {children}
//                   </AuthWrapper>
//                 </main>
//             </div>
//           </ThemeProvider>
//         </Providers>
//       </body>
//     </html>
//   )
// }

import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "./providers"
import { AuthWrapper } from "@/components/auth-wrapper"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Car Market Management System",
  description: "Streamline your vehicle inventory and sales process",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthWrapper>{children}</AuthWrapper>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

