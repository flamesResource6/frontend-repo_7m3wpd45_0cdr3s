import React from 'react'
import VibeKit from './components/VibeKit'

export default function Vibe() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white">
      <div className="relative mx-auto max-w-5xl p-6">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-pixel text-2xl text-laton">VibeKit • Nakama OS</h1>
            <p className="text-white/70">Catálogo visual interactivo: paleta, tipografías, texturas y UI Win98.</p>
          </div>
          <a href="/" className="btn-98">Volver</a>
        </header>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <VibeKit />
        </div>
      </div>
    </div>
  )
}
