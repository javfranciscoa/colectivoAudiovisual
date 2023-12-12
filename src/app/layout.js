import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './styled/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Keios - Colectivo audiovisual',
  description: 'Productora de cine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><StyledComponentsRegistry>{children}</StyledComponentsRegistry></body>
    </html>
  )
}
