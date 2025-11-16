import React from 'react'

/* VibeKit centraliza paleta, tipografías y ejemplos de UI win98 */
const Swatch = ({ color, name }) => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded border" style={{ background: color }} />
    <div className="text-sm text-white/80">{name} <span className="text-white/50">{color}</span></div>
  </div>
)

const VibeKit = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-pixel text-xl text-laton">Paleta Anti-Marina</h3>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Swatch color={getComputedStyle(document.documentElement).getPropertyValue('--beige-nostalgico') || '#F5F5DC'} name="Beige Nostálgico" />
          <Swatch color={getComputedStyle(document.documentElement).getPropertyValue('--gris-consola') || '#808080'} name="Gris de Consola" />
          <Swatch color={getComputedStyle(document.documentElement).getPropertyValue('--negro-crt') || '#0F0F0F'} name="Negro CRT" />
          <Swatch color={getComputedStyle(document.documentElement).getPropertyValue('--laton-poneglyph') || '#B5A642'} name="Latón Poneglyph" />
        </div>
      </div>

      <div>
        <h3 className="font-pixel text-xl text-laton">Tipografía</h3>
        <p className="mt-2 font-pixel text-sm">Press Start 2P — Para títulos épicos y Haki.</p>
        <p className="font-os text-base">Tahoma / MS Sans — Para UI clásica y chats.</p>
      </div>

      <div>
        <h3 className="font-pixel text-xl text-laton">Texturas</h3>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="h-20 rounded border bg-leather" />
          <div className="h-20 rounded border bg-parchment" />
          <div className="h-20 rounded border bg-pixel-neon" />
        </div>
      </div>

      <div>
        <h3 className="font-pixel text-xl text-laton">UI Win98</h3>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button className="btn-98">Aceptar</button>
          <button className="btn-98">Cancelar</button>
          <div className="ui-bevel p-2">Ventana</div>
          <div className="ui-bevel-inset p-2">Panel</div>
        </div>
      </div>
    </div>
  )
}

export default VibeKit
