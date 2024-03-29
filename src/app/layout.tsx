import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import React from "react";
import './globals.css'
import 'material-icons/iconfont/material-icons.css';
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'


const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TheNextWay',
  description: 'Dream. Plan. Do',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en">
        <body className={rubik.className}>
          <Navbar />
          
          {children}

          <Footer />
          

          </body>
    </html>
  )
}
