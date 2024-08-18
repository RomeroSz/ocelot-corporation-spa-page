import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import dynamic from 'next/dynamic'
const TapTop = dynamic(() => import('./Taptop'), { ssr: false })

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
      <TapTop />
    </>
  )
}
