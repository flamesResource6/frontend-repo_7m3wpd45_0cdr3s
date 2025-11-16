import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, Rocket, Play, Zap } from 'lucide-react'

const Starfield = () => (
  <div className="pointer-events-none absolute inset-0 starfield">
    {Array.from({ length: 60 }).map((_, i) => (
      <span
        key={i}
        style={{
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          width: Math.random() * 2 + 1,
          height: Math.random() * 2 + 1,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
)

const Hero3D = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#06060a] neon-grid">
      <Starfield />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06060a] opacity-95" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md neon-border"
          >
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            <span className="text-sm text-fuchsia-200">Edición OS • Anime Mode</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl holo-text"
          >
            Otaku Neo‑OS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-2xl text-lg text-white/85"
          >
            Un sistema con aura shōnen, partículas cósmicas y neón líquido. Todo corre en tu navegador, con escenas 3D y micro‑interacciones de alto voltaje.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <button className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110">
              <Rocket className="h-5 w-5" />
              Iniciar Sesión de Poder
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              <Play className="h-5 w-5" />
              Ver Demo
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-400/50 px-5 py-3 font-semibold text-fuchsia-200 transition hover:bg-fuchsia-500/10">
              <Zap className="h-5 w-5" />
              Activar Haki Visual
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero3D
