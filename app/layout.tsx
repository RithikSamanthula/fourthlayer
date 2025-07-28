import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FourthLayer AI - Revolutionary Health Monitoring",
  description: "Advanced AI-powered health monitoring through your smartphone camera and microphone",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "dark bg-black text-slate-100 antialiased")}>
        <div className="min-h-screen bg-black">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
