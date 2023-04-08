import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from '@/app/components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Creating and Airbnb clone to learn nextjs and mongodb integration',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RentModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
