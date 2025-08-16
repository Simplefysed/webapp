'use client'

import React from 'react'
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCalcom } from '@/hooks/useCalcom'

export default function Process() {
  // Use centralized Cal.com hook
  useCalcom("30min")

  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, goals, and challenges through detailed consultation and requirements gathering.',
      details: ['Stakeholder interviews', 'Requirements analysis', 'Technical feasibility study', 'Project roadmap creation']
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Design & Architecture',
      description: 'Our team designs the optimal solution architecture and user experience that aligns with your business objectives.',
      details: ['System architecture design', 'UI/UX wireframes', 'Technology stack selection', 'Security planning']
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Development & Testing',
      description: 'We build your solution using agile methodology with continuous testing and quality assurance throughout the process.',
      details: ['Agile development sprints', 'Continuous integration', 'Automated testing', 'Code reviews']
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Deploy & Support',
      description: 'We ensure smooth deployment and provide ongoing support to keep your solution running optimally.',
      details: ['Production deployment', 'Performance monitoring', 'User training', '24/7 support']
    }
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Development Process
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures successful project delivery from concept to deployment and beyond.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-8 border border-secondary-200 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mr-4">
                        {step.icon}
                      </div>
                      <div className="text-sm font-medium text-primary-600">
                        Step {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-secondary-600 mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-secondary-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-secondary-200">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-secondary-600 mb-6">
              Let's discuss how we can help transform your business with custom technology solutions.
            </p>
            <button 
              data-cal-namespace="30min"
              data-cal-link="simplefysed/30min"
              data-cal-config='{"layout":"month_view"}'
              className="btn-primary"
            >
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
