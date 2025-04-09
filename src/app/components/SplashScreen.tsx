'use client'

import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Splash screen durante 2 segundos

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-300">
      <img src="/splash-screen.png" alt="Splash Screen" className="w-full h-full object-cover" />
    </div>
  )
}
