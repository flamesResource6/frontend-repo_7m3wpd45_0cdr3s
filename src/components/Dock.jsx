import React from 'react'
import { Home, Music, Tv, Settings, MessageCircle, Image as ImageIcon, Gamepad2, Monitor, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'

const apps = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'music', label: 'Música', icon: Music },
  { id: 'anime', label: 'Anime', icon: Tv },
  { id: 'chat', label: 'Chat', icon: MessageCircle },
  { id: 'wallpapers', label: 'Fondos', icon: ImageIcon },
  { id: 'games', label: 'Juegos', icon: Gamepad2 },
  { id: 'monitor', label: 'Monitor', icon: Monitor },
  { id: 'terminal', label: 'Terminal', icon: Terminal },
  { id: 'settings', label: 'Ajustes', icon: Settings },
]

const Dock = ({ onOpen }) => {
  return (
    <div className="pointer-events-auto fixed inset-x-0 bottom-6 z-50 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex gap-3 rounded-2xl bg-black/40 p-3 backdrop-blur-xl ring-1 ring-white/10"
      >
        {apps.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onOpen(id)}
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10"
          >
            <Icon className="h-5 w-5 transition group-hover:scale-110" />
            <span className="pointer-events-none absolute -top-8 scale-90 rounded-md bg-black/70 px-2 py-1 text-xs text-white opacity-0 backdrop-blur group-hover:opacity-100">
              {label}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  )
}

export default Dock
