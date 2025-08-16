import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Action - Interactive Demos | Simplefysed',
  description: 'Experience our cutting-edge AI solutions through interactive demonstrations. See how artificial intelligence transforms business operations in real-time.',
  keywords: 'AI demo, artificial intelligence, automation demo, agentic systems, interactive AI, business intelligence',
}

export default function AIDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}





