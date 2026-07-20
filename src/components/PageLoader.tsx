import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import FamabyLogo from './FamabyLogo'

export default function PageLoader() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 h-1 z-[100] bg-gradient-to-r from-primary via-primary-light to-secondary"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="w-16 h-16 rounded-full border-4 border-primary/10 border-t-primary border-r-secondary"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FamabyLogo size={32} variant="icon" />
                </div>
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-semibold text-primary tracking-wider"
              >
                FAMABY
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
