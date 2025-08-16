'use client'

import { useEffect, useRef } from 'react'
import { getCalApi } from '@calcom/embed-react'

// Global flag to prevent multiple initializations
let calInitialized = false

export const useCalcom = (namespace: string = "30min") => {
  const initRef = useRef(false)

  useEffect(() => {
    // Prevent multiple initializations
    if (calInitialized || initRef.current) return
    
    initRef.current = true
    
    const initCalcom = async () => {
      try {
        const cal = await getCalApi({ namespace })
        cal("ui", {
          "hideEventTypeDetails": false,
          "layout": "month_view"
        })
        calInitialized = true
      } catch (error) {
        console.error('Failed to initialize Cal.com:', error)
        initRef.current = false
      }
    }

    initCalcom()
  }, [namespace])

  return { initialized: calInitialized }
}

