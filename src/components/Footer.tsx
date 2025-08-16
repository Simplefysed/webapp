'use client'

import { Code, Mail, MapPin, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Simplefysed</span>
            </div>
            <p className="text-secondary-300 mb-4">
              Transforming businesses through custom web applications, intelligent automation, and cutting-edge digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ghiles-moussaoui-b36218250/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/vin-m-587a70256/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-secondary-300 hover:text-primary-400 transition-colors">Web App Development</a></li>
              <li><a href="/#services" className="text-secondary-300 hover:text-primary-400 transition-colors">Agentic Solutions</a></li>
              <li><a href="/#services" className="text-secondary-300 hover:text-primary-400 transition-colors">Process Automation</a></li>
              <li><a href="/#services" className="text-secondary-300 hover:text-primary-400 transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-secondary-300 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="/#process" className="text-secondary-300 hover:text-primary-400 transition-colors">Our Process</a></li>
              <li><a href="/ai-demo" className="text-secondary-300 hover:text-primary-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-secondary-300">info@simplefysed.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-secondary-300">Thuringia, Germany</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            © 2025 Simplefysed Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
