import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/context/providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BlogMan - Your blog your data',
  description: 'Blog user write your blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  )
}
