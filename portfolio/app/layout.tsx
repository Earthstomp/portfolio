import { Poppins } from 'next/font/google'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import React from 'react'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  keywords:
    'web development, web design, javascript, react, node, vue, html, css, java, django, typescript'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <Cursor></Cursor>
      <body className={poppins.className}>
        <Header />
        <main className='text-gray-200 flex justify-center'>
          <div className="sm:w-full md:w-5/6 lg:w-2/3">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  )
}
