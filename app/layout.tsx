import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Happy Birthday, Janhvi!",
  description: "A special birthday surprise for Janhvi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(255, 105, 180, 0.5);
            border-radius: 4px;
            transition: background-color 0.2s;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(255, 105, 180, 0.8);
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

