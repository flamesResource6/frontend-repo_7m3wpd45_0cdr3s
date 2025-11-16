import React from 'react'
import { X, Minus, Maximize } from 'lucide-react'
import { motion } from 'framer-motion'

const Window = ({ title, children, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-auto overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 text-white shadow-2xl backdrop-blur-xl"
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <p className="select-none text-sm font-medium text-white/90">{title}</p>
        <div className="flex items-center gap-2 opacity-70">
          <Minus className="h-4 w-4" />
          <Maximize className="h-4 w-4" />
          <button onClick={onClose} className="rounded p-1 hover:bg-white/10">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="max-h-[60vh] w-[90vw] max-w-3xl overflow-auto p-4 sm:w-[70vw]">
        {children}
      </div>
    </motion.div>
  )
}

export default Window
