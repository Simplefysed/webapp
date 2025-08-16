'use client'

import { Brain, Bot, Network, Zap, Code, Database, Cpu, CircuitBoard, Sparkles } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered Web Applications',
      description: 'Next-generation web apps infused with artificial intelligence, machine learning capabilities, and adaptive user experiences.',
      features: ['Intelligent UI/UX', 'ML model integration', 'Predictive analytics', 'Auto-scaling architecture'],
      color: 'from-cyan-400 to-blue-600',
      shadowColor: 'shadow-cyan-500/25'
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Autonomous Agentic Systems',
      description: 'Self-learning AI agents that operate independently, make complex decisions, and continuously optimize your business processes.',
      features: ['Autonomous decision-making', 'Multi-agent coordination', 'Self-optimization', 'Contextual awareness'],
      color: 'from-purple-400 to-pink-600',
      shadowColor: 'shadow-purple-500/25'
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Intelligent Process Automation',
      description: 'AI-driven automation that learns from your workflows and adapts to create more efficient, error-free operations.',
      features: ['Smart workflow optimization', 'Anomaly detection', 'Predictive maintenance', 'Dynamic scaling'],
      color: 'from-emerald-400 to-green-600',
      shadowColor: 'shadow-emerald-500/25'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Digital Process Automation',
      description: 'Streamline your business operations with intelligent automation that eliminates manual tasks and optimizes workflows.',
      features: ['Workflow automation', 'Task orchestration', 'Process optimization', 'Integration management'],
      color: 'from-yellow-400 to-orange-600',
      shadowColor: 'shadow-yellow-500/25'
    },
    {
      icon: <CircuitBoard className="h-8 w-8" />,
      title: 'Cognitive API Orchestration',
      description: 'Smart API management with AI-powered routing, load balancing, and predictive scaling for optimal performance.',
      features: ['Intelligent routing', 'Auto-scaling APIs', 'Predictive load balancing', 'AI security monitoring'],
      color: 'from-indigo-400 to-purple-600',
      shadowColor: 'shadow-indigo-500/25'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'AI Data Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics, real-time processing, and intelligent automation.',
      features: ['Real-time AI analytics', 'Automated insights', 'Predictive modeling', 'Intelligent data pipelines'],
      color: 'from-rose-400 to-red-600',
      shadowColor: 'shadow-rose-500/25'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="rgba(59, 130, 246, 0.1)"/>
              <circle cx="80" cy="80" r="2" fill="rgba(168, 85, 247, 0.1)"/>
              <path d="M20 20 L80 20 L80 80" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6 border border-cyan-200"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Cpu className="w-4 h-4 mr-2" />
            AI-First Solutions
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Smart Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Experience the future of business automation with our cutting-edge AI solutions that learn, adapt, and optimize your operations autonomously.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              className={`relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:border-white/80 transition-all duration-500 group overflow-hidden ${service.shadowColor} hover:shadow-2xl`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Floating icon container */}
              <motion.div 
                className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ 
                  rotateY: 180,
                  scale: 1.1 
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center text-sm text-slate-600"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.1) + 0.5 }}
                  >
                    <motion.div 
                      className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: featureIndex * 0.3 
                      }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Let our intelligent systems revolutionize your operations, increase efficiency, and unlock new possibilities for growth.
              </p>
              <motion.a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start AI Transformation
                <Brain className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
