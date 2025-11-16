import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Globe, Crown, Flame } from 'lucide-react'
import Hero3D from './components/Hero3D'
import Dock from './components/Dock'
import Window from './components/Window'

function App() {
  const [openApp, setOpenApp] = useState(null)
  const [theme, setTheme] = useState(() => localStorage.getItem('nakama-theme') || 'anti')
  const [coins, setCoins] = useState(0)
  const backend = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])

  useEffect(() => {
    if (theme === 'sakura') {
      document.documentElement.setAttribute('data-theme', 'sakura')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem('nakama-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'sakura' ? 'anti' : 'sakura'))

  const rewardTick = async () => {
    try {
      const res = await fetch(`${backend}/api/reward/tick`, { method: 'POST' })
      const data = await res.json()
      if (data && typeof data.balance === 'number') {
        setCoins(data.balance)
        const el = document.getElementById('belly-counter')
        if (el) {
          el.classList.add('haki-pulse')
          setTimeout(() => el.classList.remove('haki-pulse'), 800)
        }
      }
    } catch (e) {
      console.error('reward tick failed', e)
    }
  }

  return (
    <div className="min-h-screen w/full bg-[#06060a] text-white">
      {/* CRT scanline wrapper */}
      <div className="scanline">
        {/* Hero con Spline + neon grid */}
        <Hero3D />

        {/* Escritorio mejorado */}
        <section className="relative z-10 mx-auto -mt-24 max-w-7xl rounded-3xl neon-border glass-card p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">
                <Crown className="h-3.5 w-3.5" />
                Estado: Super Saiyan UI
              </div>
              <h2 className="mt-2 text-xl font-semibold text-white/90">
                Neon Desktop
              </h2>
              <p className="text-sm text-white/60">Mini‑OS anime/cyberpunk con shaders y aura.</p>
            </div>
            <div className="flex items-center gap-3">
              <div id="belly-counter" className="rounded-md border border-white/10 bg-white/10 px-2 py-1 text-sm text-fuchsia-200">
                ฿ {coins}
              </div>
              <a href="https://github.com" target="_blank" className="rounded-lg bg-white/10 p-2 ring-1 ring-white/10 transition hover:bg-white/20">
                <Github className="h-5 w-5" />
              </a>
              <a href="/test" className="rounded-lg bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition hover:bg-white/20">
                Diagnóstico
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { id: 'anime', title: 'Centro Otaku', desc: 'Noticias, rankings y wallpapers de tus series favoritas.' },
              { id: 'music', title: 'Lo-Fi Radio', desc: 'Beats para codear como un prota de shonen.' },
              { id: 'terminal', title: 'Terminal Neko', desc: 'Comandos kawaii con efectos neon.' },
            ].map(card => (
              <button
                key={card.id}
                onClick={() => setOpenApp(card.id)}
                className="group rounded-2xl neon-border glass-card p-5 text-left transition hover:-translate-y-0.5"
              >
                <div className="mb-2 flex items-center gap-2 text-xs text-fuchsia-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  App
                </div>
                <p className="text-lg font-semibold text-white/90">{card.title}</p>
                <p className="mt-1 text-sm text-white/70">{card.desc}</p>
                <div className="mt-4 opacity-0 transition group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 text-fuchsia-300">Abrir</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Dock */}
      <Dock onOpen={setOpenApp} onToggleTheme={toggleTheme} onReward={rewardTick} />

      {/* Ventanas */}
      <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
        <AnimatePresence>
          {openApp === 'anime' && (
            <Window title="Centro Otaku" onClose={() => setOpenApp(null)}>
              <div className="space-y-4">
                <p className="text-white/80">Bienvenido al hub con toques retro‑futuristas. Aquí pronto verás widgets de trending, wallpapers y trailers.</p>
                <ul className="list-disc pl-5 text-white/70">
                  <li>Top openings de la semana</li>
                  <li>Galería de fondos 4K</li>
                  <li>Calendario de estrenos</li>
                </ul>
              </div>
            </Window>
          )}

          {openApp === 'music' && (
            <Window title="Lo‑Fi Radio" onClose={() => setOpenApp(null)}>
              <div className="space-y-3">
                <p className="text-white/80">Sintoniza melodías suaves con glow púrpura. (Demo visual)</p>
                <div className="h-2 w-full overflow-hidden rounded bg-white/10">
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: ['-100%', '0%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    className="h-full w-1/3 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400"
                  />
                </div>
              </div>
            </Window>
          )}

          {openApp === 'terminal' && (
            <Window title="Terminal Neko" onClose={() => setOpenApp(null)}>
              <div className="font-mono text-sm text-fuchsia-300">
{`neko@otaku-os:~$ `}
                <span className="text-white">summon --waifus --power-level 9000</span>
                <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-black/40 p-3 text-fuchsia-200">
{`>> iniciando protocolo kawaii...
>> cargando shaders neon...
>> listo! ʕ•́ᴥ•̀ʔっ♡`}
                </pre>
              </div>
            </Window>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
