'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alexandra T.',
      position: 'Founder & CEO',
      content: 'Simplefysed built us a complex lead generation and enrichment system that seamlessly integrates Clay, SalesNavigator, and multiple data sources. Our sales pipeline is now fully automated and our lead quality has increased by 300%.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'David M.',
      position: 'Chief Technology Officer',
      content: 'The agentic solution they built for us handles complex data processing autonomously. It\'s like having an AI employee that never sleeps.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Rebecca F.',
      position: 'VP of Operations',
      content: 'Their Next.js application exceeded our expectations. Fast, scalable, and beautifully designed. Our users love the new interface.',
      rating: 5,
      avatar: 'RF'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Simplefysed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-secondary-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
