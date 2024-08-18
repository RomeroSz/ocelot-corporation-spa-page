import Image from "next/image"

import LogoImage from '@/images/logos/logo-sin-fondo.png'
import LogoImageIcon from '@/images/logos/logo.icono.png'

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image src={LogoImageIcon} alt="Logomark" width={80} height={80}/>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image src={LogoImage} alt="Logomark" width={180} height={60}/>
  )
}
