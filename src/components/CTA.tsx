'use client'

import React, { useState } from 'react'
import { ArrowRight, Mail, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCalcom } from '@/hooks/useCalcom'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Use centralized Cal.com hook
  useCalcom("30min")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // First, try with normal CORS mode
      let response
      try {
        response = await fetch('https://hook.eu2.make.com/bpi8hjat749nfjjf2ub2otbr2w3w2tv3', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        
        if (response.ok) {
          console.log('Form data sent successfully:', formData)
        } else {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      } catch (corsError) {
        // If CORS fails, try with no-cors mode as fallback
        console.log('CORS error detected, trying no-cors mode:', corsError)
        
        await fetch('https://hook.eu2.make.com/bpi8hjat749nfjjf2ub2otbr2w3w2tv3', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
          body: JSON.stringify(formData)
        })
        
        console.log('Form data sent via no-cors:', formData)
      }
      
      // Reset form on successful submission
      setFormData({ name: '', email: '', company: '', message: '' })
      alert('Thank you! We\'ll get back to you soon.')
      
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Sorry, there was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our custom solutions can streamline your operations, 
              automate your processes, and accelerate your growth.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-primary-200">info@simplefysed.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-primary-200">Thuringia, Germany</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                data-cal-namespace="30min"
                data-cal-link="simplefysed/30min"
                data-cal-config='{"layout":"month_view"}'
                className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center group"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-all duration-200 text-center">
                View Our Services
              </a>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <motion.h3 
              className="text-2xl font-bold text-secondary-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Get Started Today
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-secondary-700 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Full Name *
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ease-out hover:border-primary-300 hover:shadow-sm focus:shadow-md transform focus:scale-[1.02]"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-secondary-700 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Email Address *
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ease-out hover:border-primary-300 hover:shadow-sm focus:shadow-md transform focus:scale-[1.02]"
                  placeholder="john@company.com"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.label 
                  htmlFor="company" 
                  className="block text-sm font-medium text-secondary-700 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Company Name
                </motion.label>
                <motion.input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ease-out hover:border-primary-300 hover:shadow-sm focus:shadow-md transform focus:scale-[1.02]"
                  placeholder="Your Company"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-secondary-700 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Project Details *
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ease-out hover:border-primary-300 hover:shadow-sm focus:shadow-md transform focus:scale-[1.02] resize-none"
                  placeholder="Tell us about your project, goals, and how we can help..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-out inline-flex items-center justify-center group hover:shadow-lg transform hover:scale-[1.02] disabled:hover:scale-100"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.span
                    animate={{ opacity: isSubmitting ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.span>
                  
                  <motion.div
                    className="ml-2"
                    animate={{ 
                      x: isSubmitting ? 0 : 0,
                      rotate: isSubmitting ? 360 : 0
                    }}
                    transition={{ 
                      duration: isSubmitting ? 1 : 0.3,
                      repeat: isSubmitting ? Infinity : 0,
                      ease: "linear"
                    }}
                  >
                    <Send className={`h-5 w-5 ${!isSubmitting ? 'group-hover:translate-x-1' : ''} transition-transform duration-300`} />
                  </motion.div>
                </motion.button>
              </motion.div>
            </form>

            <motion.p 
              className="text-sm text-secondary-500 mt-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              We'll respond within 24 hours. Your information is secure and confidential.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
