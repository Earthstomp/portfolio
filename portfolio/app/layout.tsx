import { Poppins } from 'next/font/google'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import React from 'react'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Keith, Software Developer',
  description: 'Generated by create next app',
  keywords:
    'web development, web design, javascript, react, node, vue, html, css, java, django, typescript'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='px-8'>{children}</main>
      </body>
    </html>
  )
}
