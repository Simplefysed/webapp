'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Pause, RefreshCw, Brain, Bot, Network, Zap, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import DynamicParticleSystem from '@/components/DynamicParticleSystem'
import { useCalcom } from '@/hooks/useCalcom'

export default function AIDemo() {
  const [activeDemo, setActiveDemo] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Use centralized Cal.com hook
  useCalcom("30min")

  useEffect(() => {
    setIsClient(true)
  }, [])

  const demos = [
    {
      id: 'chatbot',
      title: 'Intelligent Customer Support Agent',
      description: 'AI-powered chatbot that understands context and provides personalized responses',
      icon: <Bot className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Learning from Interactions']
    },
    {
      id: 'workflow',
      title: 'Autonomous Workflow Automation',
      description: 'Self-optimizing workflows that adapt and improve based on performance data',
      icon: <Network className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Decision Making', 'Process Optimization', 'Exception Handling', 'Performance Analytics']
    },
    {
      id: 'analytics',
      title: 'Predictive Business Analytics',
      description: 'AI models that forecast trends and provide actionable business insights',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Trend Prediction', 'Risk Assessment', 'Opportunity Detection', 'Real-time Insights']
    },
    {
      id: 'optimization',
      title: 'Neural Performance Optimization',
      description: 'AI systems that continuously optimize application performance and resource usage',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-500',
      features: ['Auto-scaling', 'Resource Allocation', 'Performance Tuning', 'Cost Optimization']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Effects */}
      {isClient && (
        <DynamicParticleSystem 
          particleCount={40} 
          colors={['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981']}
          className="opacity-30"
        />
      )}

      {/* Header */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Action</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience our cutting-edge AI solutions through interactive demonstrations. 
              See how artificial intelligence transforms business operations in real-time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Navigation */}
      <div className="relative z-10 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {demos.map((demo, index) => (
              <motion.button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${demo.color}`}>
                  {demo.icon}
                </div>
                <span className="hidden sm:block">{demo.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Demo Display */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Demo Info */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${demos[activeDemo].color} mb-6`}>
                  {demos[activeDemo].icon}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {demos[activeDemo].title}
                </h2>
                
                <p className="text-lg text-slate-300 mb-8">
                  {demos[activeDemo].description}
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                  {demos[activeDemo].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Link 
                    href="/#contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 inline-block text-center"
                  >
                    Try This Solution
                  </Link>
                  <Link 
                    href="/#contact"
                    className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-white/20 inline-block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Demo Visualization */}
            <div className="order-1 lg:order-2">
              <DemoVisualization demo={demos[activeDemo]} isActive={true} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven AI Impact
            </h2>
            <p className="text-lg text-slate-300">
              Real results from our AI implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '85%', label: 'Efficiency Increase', icon: <Zap className="h-6 w-6" /> },
              { metric: '24/7', label: 'Autonomous Operation', icon: <Clock className="h-6 w-6" /> },
              { metric: '200%', label: 'ROI Improvement', icon: <TrendingUp className="h-6 w-6" /> },
              { metric: '99.9%', label: 'Accuracy Rate', icon: <Brain className="h-6 w-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Implement AI in Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let's discuss how these AI solutions can transform your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                data-cal-namespace="30min"
                data-cal-link="simplefysed/30min"
                data-cal-config='{"layout":"month_view"}'
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Schedule AI Consultation
              </button>
              <Link 
                href="/"
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 border border-white/20"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Demo Visualization Component
function DemoVisualization({ demo, isActive }: { demo: any, isActive: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isActive) {
      setIsPlaying(true)
      const timer = setTimeout(() => setIsPlaying(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isActive])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
        {/* Demo Screen */}
        <div className="bg-slate-900 rounded-2xl p-6 mb-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-slate-500'}`}></div>
              <span>{isPlaying ? 'Running' : 'Ready'}</span>
            </div>
          </div>

          {/* Dynamic Content Based on Demo Type */}
          <DemoContent demoId={demo.id} isPlaying={isPlaying} />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isPlaying
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
            }`}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span>{isPlaying ? 'Pause' : 'Run Demo'}</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium bg-slate-600/20 text-slate-400 hover:bg-slate-600/30 transition-all duration-300">
            <RefreshCw className="h-4 w-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// Demo Content Component
function DemoContent({ demoId, isPlaying }: { demoId: string, isPlaying: boolean }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => prev < 100 ? prev + 2 : 0)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  switch (demoId) {
    case 'chatbot':
      return (
        <div className="space-y-4 h-48">
          <div className="flex justify-start">
            <div className="bg-slate-700 rounded-lg p-3 max-w-xs">
              <p className="text-slate-300 text-sm">Hello! How can I help you today?</p>
            </div>
          </div>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-end"
            >
              <div className="bg-cyan-500 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">I need help with my order</p>
              </div>
            </motion.div>
          )}
          {isPlaying && progress > 50 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-slate-700 rounded-lg p-3 max-w-xs">
                <p className="text-slate-300 text-sm">I can help you track your order. Let me pull up your account...</p>
              </div>
            </motion.div>
          )}
        </div>
      )
    case 'workflow':
      return (
        <div className="h-48 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
            {[1, 2, 3, 4, 5, 6].map((node, index) => (
              <motion.div
                key={node}
                className={`w-16 h-16 rounded-xl flex items-center justify-center text-xs font-bold ${
                  isPlaying && progress > index * 15
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-slate-400'
                }`}
                animate={isPlaying && progress > index * 15 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {node}
              </motion.div>
            ))}
          </div>
        </div>
      )
    case 'analytics':
      return (
        <div className="h-48 flex items-end justify-center space-x-2">
          {[40, 60, 45, 80, 35, 70, 90].map((height, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-t from-cyan-500 to-blue-500 w-8 rounded-t"
              style={{ height: isPlaying ? `${height}%` : '20%' }}
              animate={{ height: isPlaying ? `${height}%` : '20%' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
      )
    case 'optimization':
      return (
        <div className="h-48 flex flex-col justify-center">
          {['CPU Usage', 'Memory', 'Network', 'Storage'].map((metric, index) => (
            <div key={metric} className="mb-3">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>{metric}</span>
                <span>{Math.round(progress + index * 10)}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                  style={{ width: isPlaying ? `${Math.min(100, progress + index * 10)}%` : '0%' }}
                  animate={{ width: isPlaying ? `${Math.min(100, progress + index * 10)}%` : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      )
    default:
      return <div className="h-48 flex items-center justify-center text-slate-400">Demo Content</div>
  }
}
