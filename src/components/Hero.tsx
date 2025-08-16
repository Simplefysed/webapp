'use client'

import { ArrowRight, Play, Brain, Zap, Cpu, Network } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import DynamicParticleSystem from './DynamicParticleSystem'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    setIsClient(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Particle System - Dynamically loaded */}
      <DynamicParticleSystem 
        particleCount={60} 
        colors={['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b']}
        className="opacity-40"
      />
      
      {/* Animated AI Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating AI Nodes - Only render on client */}
      {isClient && (
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ x: mousePosition.x, y: mousePosition.y }}
        >
          {[...Array(8)].map((_, i) => {
            // Use deterministic positions based on index
            const baseX = (i * 150) % window.innerWidth
            const baseY = (i * 100) % window.innerHeight
            
            return (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
                initial={{ 
                  x: baseX, 
                  y: baseY,
                  scale: 0 
                }}
                animate={{ 
                  scale: [0, 1, 0.8, 1],
                  x: baseX + Math.sin(i) * 100,
                  y: baseY + Math.cos(i) * 50
                }}
                transition={{ 
                  duration: 10 + i * 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-1 bg-white rounded-full opacity-60"></div>
              </motion.div>
            )
          })}
        </motion.div>
      )}

      {/* 3D Floating Elements - Only render on client */}
      {isClient && (
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ y: y1 }}
        >
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-cyan-400/30"
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 180],
            z: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl opacity-60 flex items-center justify-center">
            <Brain className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full backdrop-blur-sm border border-purple-400/30"
          animate={{ 
            rotateZ: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-60 flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-40 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-xl backdrop-blur-sm border border-green-400/30"
          animate={{ 
            rotateY: [0, 180, 360],
            y: [0, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg opacity-60 flex items-center justify-center">
            <Network className="w-10 h-10 text-white" />
          </div>
        </motion.div>
        </motion.div>
      )}

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10"
        style={{ y: y2 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-8 border border-cyan-400/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <Cpu className="w-4 h-4 mr-2" />
              AI-Powered Business Transformation
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Next-Gen{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                AI Solutions
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                & Automation
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We craft intelligent web applications, autonomous agentic systems, and advanced automation that transforms how your business operates in the digital age.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.a 
              href="#contact" 
              className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center group shadow-lg shadow-cyan-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <span className="relative">Launch AI Project</span>
              <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <Link href="/ai-demo">
              <motion.button 
                className="relative bg-white/10 backdrop-blur-sm text-white border border-white/20 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center group hover:bg-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="mr-2 h-5 w-5" />
                <span>See AI in Action</span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <motion.div 
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 group hover:border-cyan-400/40 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <motion.div 
                className="text-4xl font-bold text-cyan-400 mb-3 relative"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(34, 211, 238, 0.5)',
                    '0 0 20px rgba(34, 211, 238, 0.8)',
                    '0 0 10px rgba(34, 211, 238, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10+
              </motion.div>
              <div className="text-slate-300 relative">Projects Delivered</div>
              <div className="absolute top-4 right-4 opacity-30">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 group hover:border-purple-400/40 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <motion.div 
                className="text-4xl font-bold text-purple-400 mb-3 relative"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(168, 85, 247, 0.5)',
                    '0 0 20px rgba(168, 85, 247, 0.8)',
                    '0 0 10px rgba(168, 85, 247, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                99%
              </motion.div>
              <div className="text-slate-300 relative">Automation Success</div>
              <div className="absolute top-4 right-4 opacity-30">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 group hover:border-emerald-400/40 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <motion.div 
                className="text-4xl font-bold text-emerald-400 mb-3 relative"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(52, 211, 153, 0.5)',
                    '0 0 20px rgba(52, 211, 153, 0.8)',
                    '0 0 10px rgba(52, 211, 153, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                24/7
              </motion.div>
              <div className="text-slate-300 relative">AI Monitoring</div>
              <div className="absolute top-4 right-4 opacity-30">
                <Network className="w-6 h-6 text-emerald-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
