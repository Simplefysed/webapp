'use client'

import dynamic from 'next/dynamic'

const ParticleSystem = dynamic(() => import('./ParticleSystem'), {
  ssr: false,
  loading: () => null
})

export default ParticleSystem





