'use client'

import { CheckCircle, Brain, Cpu, Zap, Network, Bot, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function About() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const values = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI-First Approach',
      description: 'Every solution we build incorporates intelligent automation and machine learning capabilities.'
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: 'Autonomous Systems',
      description: 'We create self-learning, adaptive systems that evolve with your business needs.'
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Future-Proof Innovation',
      description: 'Our solutions anticipate tomorrow\'s challenges using today\'s most advanced technologies.'
    }
  ]

  const achievements = [
    { number: '3+', label: 'Years in Development', icon: <Brain className="h-6 w-6" /> },
    { number: '10+', label: 'Projects', icon: <Bot className="h-6 w-6" /> },
    { number: '10+', label: 'Transformed Businesses', icon: <Network className="h-6 w-6" /> },
    { number: '99%', label: 'Automation Success', icon: <Zap className="h-6 w-6" /> }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Simplefysed</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We are pioneering the future of business automation through artificial intelligence. 
              Our expertise in agentic systems, digital automation software, and autonomous decision-making 
              transforms how organizations operate in the digital era.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">AI Research & Development</h4>
                  <p className="text-slate-600">Leading-edge research team specializing in autonomous agents and neural optimization.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Enterprise AI Solutions</h4>
                  <p className="text-slate-600">Deployed intelligent systems that process millions of decisions autonomously.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Continuous AI Learning</h4>
                  <p className="text-slate-600">Our systems evolve and improve automatically, providing ever-increasing value.</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 rounded-lg mb-3 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{value.title}</h4>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-secondary-200">
              <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
                Our Impact
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <motion.div
                        className="text-cyan-600 mr-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {achievement.icon}
                      </motion.div>
                    </div>
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-2"
                      animate={{ 
                        textShadow: [
                          '0 0 10px rgba(6, 182, 212, 0.3)',
                          '0 0 20px rgba(6, 182, 212, 0.6)',
                          '0 0 10px rgba(6, 182, 212, 0.3)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {achievement.number}
                    </motion.div>
                    <div className="text-slate-600 text-sm group-hover:text-slate-800 transition-colors">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <h4 className="font-semibold text-slate-900 mb-4">AI Technologies We Master</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['LangChain', 'TensorFlow', 'PyTorch', 'AutoGen', 'OpenAI', 'Next.js', 'n8n', 'Make.com', 'Zapier'].map((tech) => (
                      <motion.span 
                        key={tech} 
                        className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-full text-sm font-medium border border-cyan-200 hover:border-cyan-400 cursor-pointer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-primary-600 rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-100 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
