'use client'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const images = ['/7.png', '/8.png', '/9.png', '/10.png', '/11.png', '/13.png']

export default function Transform() {
  const [index, setIndex] = useState(0)

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change the interval time as per your requirement

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        key="hero"
        className="relative"
        initial={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="min-h-[70vh] w-full flex items-center justify-center relative overflow-hidden">
          <motion.div
            key={images[index]}  // Changing the key ensures the image changes every time
            initial={{ x: '100%' }}  // Start from the right
            animate={{ x: 0 }}       // Slide into the center
            exit={{ x: '-100%' }}    // Slide out to the left
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 cursor-pointer transition-transform hover:scale-[1.01] duration-500"
          >
            <Image
              src={images[index]}
              alt="Mountain landscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/30"></div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
