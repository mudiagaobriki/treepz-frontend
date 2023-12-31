import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar1 from "@/components/navbar/NavBar1";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer1 from "@/components/footer/Footer1";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar1 />
        </header>
        <div id="page-body">
            {children}
            <Footer1 />
        </div>
      </body>
    </html>
  )
}
