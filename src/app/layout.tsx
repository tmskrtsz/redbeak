import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import logo from '../../public/logo.png'
import './style.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'redbeak • break a few eggs to design for the web',
  description: 'I pair my design tuned eyeballs with a React toolkit to create great web experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="container">
          <header>
            <Image src={logo} alt="redbeak logo" width={48} />
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
