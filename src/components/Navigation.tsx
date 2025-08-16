'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/98 backdrop-blur-md border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10' 
          : 'bg-slate-900/90 backdrop-blur-sm border-b border-cyan-500/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div 
                  className={`bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                    scrolled ? 'w-9 h-9' : 'w-10 h-10'
                  }`}
                >
                  <Code className={`text-white transition-all duration-300 ${
                    scrolled ? 'h-5 w-5' : 'h-6 w-6'
                  }`} />
                </div>
                <div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"
                />
              </div>
              <span className={`font-bold text-white transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>
                Simplefysed
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-3/4 -translate-x-1/2 transition-all duration-300" />
                  <div className="absolute inset-0 bg-slate-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="/#contact" 
              className={`relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 inline-flex items-center justify-center ${
                scrolled ? 'py-2 px-5 text-sm' : 'py-2.5 px-6 text-sm'
              }`}
            >
              Launch Project
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-slate-900/98 backdrop-blur-md border-t border-cyan-500/20 shadow-lg">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-8 transition-all duration-300" />
                </div>
              </a>
            ))}
            <div className="pt-4">
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full text-center block shadow-lg shadow-cyan-500/25"
                onClick={() => setIsOpen(false)}
              >
                Launch Project
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
