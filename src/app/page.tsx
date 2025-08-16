'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Team from '@/components/Team'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div className="gradient-bg">
      <Hero />
      <Services />
      <About />
      <Team />
      <Process />
      <Testimonials />
      <CTA />
    </div>
  )
}
