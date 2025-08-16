'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Award, Code, Brain } from 'lucide-react'

export default function Team() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const founders = [
    {
      name: 'Vin Mangelsdorf',
      nationality: 'German',
      role: 'Co-Founder & Technical Lead',
      location: 'Germany',
      avatar: 'VM',
      expertise: ['Full-Stack Development', 'System Architecture', 'AI Integration', 'Process Automation', 'Workflow Design', 'Process Analysis'],
      description: 'Passionate about creating innovative solutions that bridge the gap between complex technology and real-world business needs.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Ghiles M.',
      nationality: 'Algerian',
      role: 'Co-Founder & Strategy Director',
      location: 'Algeria',
      avatar: 'GM',
      expertise: ['Business Strategy', 'Digital Transformation', 'Client Relations', 'Data Structures', 'Prompt Engineering', 'Automation Tools'],
      description: 'Focused on transforming business operations through intelligent automation and strategic technology implementation.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6">
            Meet the Founders
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Two passionate technologists from different continents, united by a shared vision 
            of revolutionizing business automation through AI and intelligent solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-secondary-200 hover:shadow-2xl transition-shadow duration-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${founder.gradient}`}></div>
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Avatar and Basic Info */}
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {founder.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 mb-2">
                        {founder.role}
                      </p>
                      <div className="flex items-center text-secondary-600 mb-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{founder.nationality} • {founder.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary-700 mb-6 leading-relaxed">
                    {founder.description}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary-600" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${founder.gradient} text-white shadow-sm`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Animated Icon */}
                  {isClient && (
                    <motion.div
                      className="flex justify-center"
                      animate={{ 
                        rotateY: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {index === 0 ? (
                        <Code className={`h-8 w-8 text-blue-500`} />
                      ) : (
                        <Brain className={`h-8 w-8 text-purple-500`} />
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">🤝</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Global Collaboration, Local Expertise
            </h3>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Combining German engineering precision with innovative North African perspectives, 
              we bring diverse cultural insights and technical expertise to every project we undertake.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
