import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Ocelot',
    default: 'Ocelot - Impulsa tu negocio.',
  },
  description:
    'La Corporación Ocelot es una startup de tecnología que ofrece soluciones innovadoras para ayudar a las empresas a impulsar su productividad y crecimiento.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>
        {children}
        
      </body>
    </html>
  )
}
