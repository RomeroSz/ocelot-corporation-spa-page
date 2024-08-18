import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import Hero from '@/components/Hero'
import { Hero2 } from '@/components/Hero2'
import Personal from '@/components/Personal'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Hero2 /> */}
      <PrimaryFeatures />
      <Personal />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Faqs />
    </>
  )
}
